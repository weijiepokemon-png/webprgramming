import React from "react";
import HomeButton from "../visitor_components/homeButton";
import { Link } from "react-router-dom";

function CustomerProfile() {
  return (
    <div>
      <HomeButton/>
      <Link to="/orderHistory">order history</Link>

      <h1>Customer Profile</h1>

      <hr />

      <div>

        <img
          src="https://i.pravatar.cc/150"
          alt="Profile"
        />

        <h2>Ashar Meet Samir</h2>

        <p><strong>Membership:</strong> Premium Member</p>

      </div>

      <hr />

      <h2>Personal Information</h2>

      <table>
        <tbody>

          <tr>
            <td><strong>Email</strong></td>
            <td>ashar@email.com</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>+61 400 123 456</td>
          </tr>

          <tr>
            <td><strong>Address</strong></td>
            <td>Sydney, Australia</td>
          </tr>

          <tr>
            <td><strong>Member Since</strong></td>
            <td>January 2026</td>
          </tr>

        </tbody>
      </table>

      <br />

      <h2>Account Summary</h2>

      <ul>
        <li>Total Orders: 32</li>
        <li>Wishlist Items: 18</li>
        <li>Total Amount Spent: $2,450</li>
      </ul>

      <br />

      <button>Edit Profile</button>

      <button>Change Password</button>

    </div>
  );
}

export default CustomerProfile;