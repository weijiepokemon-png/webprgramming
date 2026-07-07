// my purpose is to help other components talk to the backend, 
//so im doing the get methods
// the components call me instead
import axios from "axios";
const headers = {'Accept': 'application/json'};//for axios getter


//get name and price ======================================================
const API_BASE = "http://localhost:3001/api/inft3050/Product?limit=500";
const apistocktake="http://localhost:3001/api/inft3050/Stocktake?limit=500";

export function getproductdata(i){
    axios.get( "http://localhost:3001/api/inft3050/Product?limit=500", {headers: headers})
    .then((response)=>{
        let gotproductname=JSON.stringify(response.data.list[i].Name, null, 2); 
        return gotproductname;
        

    })
    .catch((error) => { console.log(error);});
}

export function getproductprice(i){
      axios.get("http://localhost:3001/api/inft3050/Stocktake?limit=500", {headers: headers})
    .then((response)=>{
        let gotproductprice=JSON.stringify(response.data.list[i].Price, null, 2); 
        return gotproductprice;

    })
    .catch((error) => { console.log(error);});

}


/**=====================================================
 * MY ASSIGNMENT — Search API
 * Queries the Product table by name, author, and genre.
 */
//const API_BASE = ''

async function parseJson(response) {
  const data = await response.json()
  if (!response.ok) {
    throw new Error(data.error || data.message || 'Request failed')
  }
  return data
}

async function apiList(path, params = {}) {
  const query = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      query.set(key, String(value))
    }
  })
  const suffix = query.toString() ? `?${query}` : ''
  const response = await fetch(`${API_BASE}${path}${suffix}`, { credentials: 'include' })
  const data = await parseJson(response)
  return Array.isArray(data.list) ? data.list : []
}

export async function fetchProducts({ search = '', genreId = '', limit = 24 } = {}) {
  const params = { limit }
  const trimmed = search.trim()
  const filters = []

  if (trimmed) {
    const term = `%${trimmed}%`
    filters.push(`(Name,like,${term})~or(Author,like,${term})`)
  }
  if (genreId) {
    filters.push(`(Genre,eq,${genreId})`)
  }
  if (filters.length) {
    params.where = filters.length > 1 ? filters.map((f) => `(${f})`).join('~and') : filters[0]
  }

  return apiList('/api/inft3050/Product', params)
}

export async function fetchGenres() {
  return apiList('/api/inft3050/Genre', { limit: 10 })
}
