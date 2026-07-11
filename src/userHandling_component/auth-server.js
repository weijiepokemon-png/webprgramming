// I DO NOT KNOW WHAT THIS SCRIPT IS DOING
/**
import express from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import sql from 'mssql';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';
import crypto from 'crypto';

const {
  PORT = 3001,
  NODE_ENV = 'development',
  JWT_SECRET = 'change-me',
  JWT_EXPIRES = '3600',
  MSSQL_SERVER = 'mssql',
  MSSQL_DB = 'YourAppDb',
  MSSQL_USER = 'sa',
  MSSQL_PASSWORD = 'YourStrong!Passw0rd',
  MSSQL_ENCRYPT = 'false',
  NOCO_URL = 'http://nocodb:8080',
  NOCO_API_TOKEN = '',
  CORS_ORIGINS = ''
} = process.env;

const app = express();

app.use(cookieParser());
app.use(express.json());

const origins = CORS_ORIGINS.split(',').map(s => s.trim()).filter(Boolean);
app.use(cors({
  origin: (origin, cb) => {
    if (!origin || origins.includes(origin)) return cb(null, true);
    return cb(new Error('CORS blocked'), false);
  },
  credentials: true
}));

const poolPromise = sql.connect({
  server: MSSQL_SERVER,
  database: MSSQL_DB,
  user: MSSQL_USER,
  password: MSSQL_PASSWORD,
  options: {
    encrypt: String(MSSQL_ENCRYPT).toLowerCase() === 'true',
    trustServerCertificate: true
  }
});

function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: Number(JWT_EXPIRES) });
}

function hashPassword(salt, password) {
  return crypto.createHash('sha256').update(salt + password, 'utf8').digest('hex');
}

function makeSalt() {
  return crypto.randomBytes(16).toString('hex');
}

function setAuthCookie(res, payload) {
  const token = signToken(payload);
  res.cookie('token', token, {
    httpOnly: true,
    secure: NODE_ENV === 'production',
    sameSite: NODE_ENV === 'production' ? 'none' : 'lax',
    maxAge: Number(JWT_EXPIRES) * 1000
  });
}

function extractTableFromPath(pathname) {
  const match = pathname.match(/^\/inft3050\/([^/]+)/i);
  return match ? decodeURIComponent(match[1]) : null;
}

function requireAuth(req, res, next) {
  const token = req.cookies?.token;
  if (!token) return res.status(401).json({ error: 'Not authenticated' });

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

function authRequired(req, res, next) {
  const token = req.cookies?.token;
  const { pathname } = new URL(req.url, 'http://x');
  const table = extractTableFromPath(pathname);

  const BLOCKED = new Set(['user', 'users', 'dbo.user', 'dbo.users']);

  let needAuth = true;
  let needAdmin = true;

  if (req.method === 'GET') {
    if (BLOCKED.has(String(table || '').toLowerCase())) {
      needAuth = true;
      needAdmin = false;
    } else {
      needAuth = false;
      needAdmin = false;
    }
  } else if (BLOCKED.has(String(table || '').toLowerCase())) {
    needAuth = true;
    needAdmin = true;
  } else {
    needAuth = true;
    needAdmin = false;
  }

  if (!needAuth) {
    next();
    return;
  }

  if (!token) {
    return res.status(401).json({ error: 'Forbidden: authentication required' });
  }

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    if (needAdmin && req.user.isAdmin !== true) {
      return res.status(403).json({ error: 'Forbidden: admin access required' });
    }
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

app.use('/api', authRequired, createProxyMiddleware({
  target: process.env.NOCO_URL,
  changeOrigin: true,
  pathRewrite: (path) => path.replace(/^\/inft3050\//, '/api/v1/db/data/v1/inft3050/'),
  headers: { 'xc-token': process.env.NOCO_API_TOKEN },
}));

function requireAdmin(req, res, next) {
  const token = req.cookies?.token;
  if (!token) return res.status(401).json({ error: 'Not authenticated' });

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    if (req.user.isAdmin !== true) {
      return res.status(403).json({ error: 'Admin access required' });
    }
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

async function loginStaff(pool, username, password) {
  const result = await pool.request()
    .input('username', sql.VarChar, username)
    .query(`
      SELECT UserID AS id, UserName AS username, HashPW AS hashpw, Salt AS salt,
             Email AS email, Name AS name, isAdmin
      FROM [User]
      WHERE UserName = @username
    `);

  const user = result.recordset?.[0];
  if (!user) return null;
  if (hashPassword(user.salt, password) !== user.hashpw) return null;

  return {
    id: user.id,
    username: user.username,
    email: user.email,
    name: user.name,
    isAdmin: Boolean(user.isAdmin),
    role: user.isAdmin ? 'admin' : 'employee',
  };
}

async function loginPatron(pool, email, password) {
  const result = await pool.request()
    .input('email', sql.VarChar, email)
    .query(`
      SELECT UserID AS id, Email AS email, Name AS name, HashPW AS hashpw, Salt AS salt
      FROM [Patrons]
      WHERE Email = @email
    `);

  const patron = result.recordset?.[0];
  if (!patron) return null;
  if (hashPassword(patron.salt, password) !== patron.hashpw) return null;

  return {
    id: patron.id,
    email: patron.email,
    name: patron.name,
    username: patron.email,
    isAdmin: false,
    role: 'patron',
  };
}

app.post('/login', async (req, res) => {
  const { username, password } = req.body ?? {};
  if (!username || !password) {
    return res.status(400).json({ error: 'username and password required' });
  }

  try {
    const pool = await poolPromise;
    const staff = await loginStaff(pool, username, password);
    const account = staff || await loginPatron(pool, username, password);

    if (!account) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    setAuthCookie(res, {
      sub: account.id,
      email: account.email,
      username: account.username,
      name: account.name,
      role: account.role,
      isAdmin: account.isAdmin,
    });

    res.json(account);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'server error' });
  }
});

app.post('/register', async (req, res) => {
  const {
    name,
    email,
    password,
    streetAddress,
    postCode,
    suburb,
    state,
    phoneNumber = null,
  } = req.body ?? {};

  if (!name || !email || !password || !streetAddress || !postCode || !suburb || !state) {
    return res.status(400).json({ error: 'All required registration fields must be provided' });
  }

  if (!/^\d+$/.test(String(postCode))) {
    return res.status(400).json({ error: 'Postcode must contain numbers only' });
  }

  try {
    const pool = await poolPromise;
    const existing = await pool.request()
      .input('email', sql.VarChar, email)
      .query('SELECT UserID FROM [Patrons] WHERE Email = @email');

    if (existing.recordset?.[0]) {
      return res.status(409).json({ error: 'An account with this email already exists' });
    }

    const salt = makeSalt();
    const hashpw = hashPassword(salt, password);

    const patronResult = await pool.request()
      .input('email', sql.VarChar, email)
      .input('name', sql.NVarChar, name)
      .input('salt', sql.VarChar, salt)
      .input('hashpw', sql.VarChar, hashpw)
      .query(`
        INSERT INTO [Patrons] (Email, Name, Salt, HashPW)
        OUTPUT INSERTED.UserID AS id, INSERTED.Email AS email, INSERTED.Name AS name
        VALUES (@email, @name, @salt, @hashpw)
      `);

    const patron = patronResult.recordset[0];

    await pool.request()
      .input('patronId', sql.Int, patron.id)
      .input('email', sql.VarChar, email)
      .input('phoneNumber', sql.VarChar, phoneNumber)
      .input('streetAddress', sql.NVarChar, streetAddress)
      .input('postCode', sql.Int, Number(postCode))
      .input('suburb', sql.NVarChar, suburb)
      .input('state', sql.NVarChar, state)
      .query(`
        INSERT INTO [TO] (PatronId, Email, PhoneNumber, StreetAddress, PostCode, Suburb, State)
        VALUES (@patronId, @email, @phoneNumber, @streetAddress, @postCode, @suburb, @state)
      `);

    const account = {
      id: patron.id,
      email: patron.email,
      name: patron.name,
      username: patron.email,
      isAdmin: false,
      role: 'patron',
    };

    setAuthCookie(res, {
      sub: account.id,
      email: account.email,
      username: account.username,
      name: account.name,
      role: account.role,
      isAdmin: false,
    });

    res.status(201).json(account);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'server error' });
  }
});

app.post('/recover', (req, res) => {
  const { email } = req.body ?? {};
  if (!email) return res.status(400).json({ error: 'Email is required' });
  res.json({ ok: true, message: 'If that email exists, recovery instructions have been sent.' });
});

app.post('/logout', (_req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: NODE_ENV === 'production',
    sameSite: NODE_ENV === 'production' ? 'none' : 'lax',
  });
  res.json({ ok: true });
});

app.get('/staff/users', requireAdmin, async (_req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query(`
      SELECT UserID, UserName, Email, Name, IsAdmin AS isAdmin
      FROM [User]
      ORDER BY UserID
    `);
    res.json({ list: result.recordset });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'server error' });
  }
});

app.post('/staff/users', requireAdmin, async (req, res) => {
  const { UserName, Name, Email, password, isAdmin = false } = req.body ?? {};
  if (!UserName || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    const pool = await poolPromise;
    const salt = makeSalt();
    const hashpw = hashPassword(salt, password);
    const result = await pool.request()
      .input('username', sql.VarChar, UserName)
      .input('name', sql.NVarChar, Name || UserName)
      .input('email', sql.VarChar, Email || null)
      .input('salt', sql.VarChar, salt)
      .input('hashpw', sql.VarChar, hashpw)
      .input('isAdmin', sql.Bit, isAdmin ? 1 : 0)
      .query(`
        INSERT INTO [User] (UserName, Name, Email, Salt, HashPW, IsAdmin)
        OUTPUT INSERTED.UserID, INSERTED.UserName, INSERTED.Name, INSERTED.Email, INSERTED.IsAdmin AS isAdmin
        VALUES (@username, @name, @email, @salt, @hashpw, @isAdmin)
      `);
    res.status(201).json(result.recordset[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'server error' });
  }
});

app.patch('/staff/users/:id', requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  const { UserName, Name, Email, password, isAdmin } = req.body ?? {};
  if (!id) return res.status(400).json({ error: 'Invalid user id' });

  try {
    const pool = await poolPromise;
    const salt = password ? makeSalt() : null;
    const hashpw = password ? hashPassword(salt, password) : null;

    await pool.request()
      .input('id', sql.Int, id)
      .input('username', sql.VarChar, UserName)
      .input('name', sql.NVarChar, Name)
      .input('email', sql.VarChar, Email || null)
      .input('salt', sql.VarChar, salt)
      .input('hashpw', sql.VarChar, hashpw)
      .input('isAdmin', sql.Bit, isAdmin ? 1 : 0)
      .query(`
        UPDATE [User]
        SET UserName = COALESCE(@username, UserName),
            Name = COALESCE(@name, Name),
            Email = COALESCE(@email, Email),
            IsAdmin = COALESCE(@isAdmin, IsAdmin),
            Salt = COALESCE(@salt, Salt),
            HashPW = COALESCE(@hashpw, HashPW)
        WHERE UserID = @id
      `);

    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'server error' });
  }
});

app.delete('/staff/users/:id', requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  if (!id) return res.status(400).json({ error: 'Invalid user id' });

  try {
    const pool = await poolPromise;
    await pool.request()
      .input('id', sql.Int, id)
      .query('DELETE FROM [User] WHERE UserID = @id');
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'server error' });
  }
});

app.get('/me', requireAuth, (req, res) => {
  res.json({
    id: req.user.sub,
    email: req.user.email,
    username: req.user.username,
    name: req.user.name,
    role: req.user.role,
    isAdmin: req.user.isAdmin === true,
  });
});

app.listen(PORT, () => {
  console.log(`Auth server listening on :${PORT}`);
});

*/