import React from "react";
import HomeButton from "../visitor_components/homeButton";

function EditProfile() {
  return (
    <div>
      <HomeButton/>

      <h1>Edit Customer Profile</h1>

      <hr />

      <form>

        <h2>Personal Information</h2>

        <div>
          <label>Profile Picture</label><br />
          <input type="file" />
        </div>

        <br />

        <div>
          <label>First Name</label><br />
          <input type="text" placeholder="Enter first name" />
        </div>

        <br />

        <div>
          <label>Last Name</label><br />
          <input type="text" placeholder="Enter last name" />
        </div>

        <br />

        <div>
          <label>Username</label><br />
          <input type="text" placeholder="Enter username" />
        </div>

        <br />

        <div>
          <label>Email Address</label><br />
          <input type="email" placeholder="example@email.com" />
        </div>

        <br />

        <div>
          <label>Phone Number</label><br />
          <input type="tel" placeholder="+61 400 123 456" />
        </div>

        <br />

        <div>
          <label>Date of Birth</label><br />
          <input type="date" />
        </div>

        <br />

        <div>
          <label>Gender</label><br />
          <select>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Prefer not to say</option>
          </select>
        </div>

        <hr />

        <h2>Address Details</h2>

        <div>
          <label>Street Address</label><br />
          <input type="text" placeholder="Street Address" />
        </div>

        <br />

        <div>
          <label>City</label><br />
          <input type="text" placeholder="City" />
        </div>

        <br />

        <div>
          <label>State</label><br />
          <input type="text" placeholder="State" />
        </div>

        <br />

        <div>
          <label>Postal Code</label><br />
          <input type="text" placeholder="Postal Code" />
        </div>

        <br />

        <div>
          <label>Country</label><br />
          <select>
            <option>Australia</option>
            <option>Singapore</option>
            <option>Malaysia</option>
            <option>Other</option>
          </select>
        </div>

        <hr />

        <h2>Account Settings</h2>

        <div>
          <label>Current Password</label><br />
          <input
            type="password"
            placeholder="Current Password"
          />
        </div>

        <br />

        <div>
          <label>New Password</label><br />
          <input
            type="password"
            placeholder="New Password"
          />
        </div>

        <br />

        <div>
          <label>Confirm New Password</label><br />
          <input
            type="password"
            placeholder="Confirm Password"
          />
        </div>

        <br />

        <div>
          <input type="checkbox" />
          <label>
            Receive promotional emails and special offers
          </label>
        </div>

        <br />

        <div>
          <input type="checkbox" />
          <label>
            Receive order updates and notifications
          </label>
        </div>

        <br />

        <button type="submit">
          Save Changes
        </button>

        <button type="reset">
          Cancel
        </button>

      </form>

    </div>
  );
}

export default EditProfile;