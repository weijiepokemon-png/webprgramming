import React from "react";
import ItemDisplayed from "../visitor_components/itemDisplayed";
import HomeButton from "../visitor_components/homeButton";
function Checkout() {
  return (
    <div>

      {/* Header */}
      <button>Home</button>
      <HomeButton/>

      <input
        type="text"
        placeholder="Search products..."
      />

      <hr />

      {/* Cart Items */}
      <h2>Shopping Cart</h2>

      <ItemDisplayed  id={90}/>
      <br />

      <ItemDisplayed  id={50}/>
      <br />

      <ItemDisplayed  id={122}/>

      <hr />

      {/* Customer Information */}
      <h2>Customer Information</h2>

      <p><strong>Name:</strong> Ashar Meet Samir</p>
      <p><strong>Email:</strong> ashar@email.com</p>
      <p><strong>Phone:</strong> +61 400 123 456</p>

      <hr />

      {/* Shipping Address */}
      <h2>Shipping Address</h2>

      <input type="text" placeholder="Full Name" />
      <br /><br />

      <input type="text" placeholder="Street Address" />
      <br /><br />

      <input type="text" placeholder="Apartment / Unit (Optional)" />
      <br /><br />

      <input type="text" placeholder="City" />
      <br /><br />

      <input type="text" placeholder="State" />
      <br /><br />

      <input type="text" placeholder="Postal Code" />
      <br /><br />

      <select>
        <option>Australia</option>
        <option>Singapore</option>
        <option>Malaysia</option>
      </select>

      <hr />

      {/* Delivery Options */}
      <h2>Delivery Method</h2>

      <input type="radio" name="delivery" />
      <label> Standard Delivery (3-5 Days) - $10</label>

      <br />

      <input type="radio" name="delivery" />
      <label> Express Delivery (1-2 Days) - $20</label>

      <br />

      <input type="radio" name="delivery" />
      <label> Store Pickup - Free</label>

      <hr />

      {/* Payment */}
      <h2>Payment Method</h2>

      <select>
        <option>Credit Card</option>
        <option>Debit Card</option>
        <option>PayPal</option>
        <option>Apple Pay</option>
      </select>

      <br /><br />

      <input type="text" placeholder="Card Number" />
      <br /><br />

      <input type="text" placeholder="Cardholder Name" />
      <br /><br />

      <input type="text" placeholder="Expiry Date (MM/YY)" />
      <br /><br />

      <input type="password" placeholder="CVV" />

      <hr />

      {/* Promo Code */}
      <h2>Promo Code</h2>

      <input
        type="text"
        placeholder="Enter Promo Code"
      />

      <button>Apply</button>

      <hr />

      {/* Order Summary */}
      <h2>Order Summary</h2>

      <table border="1" cellPadding="8">

        <tbody>

          <tr>
            <td>Subtotal</td>
            <td>$250.00</td>
          </tr>

          <tr>
            <td>Shipping Fee</td>
            <td>$10.00</td>
          </tr>

          <tr>
            <td>Tax (GST)</td>
            <td>$25.00</td>
          </tr>

          <tr>
            <td>Discount</td>
            <td>-$15.00</td>
          </tr>

          <tr>
            <th>Total</th>
            <th>$270.00</th>
          </tr>

        </tbody>

      </table>

      <br />

      <input type="checkbox" />

      <label>
        I agree to the Terms & Conditions and Refund Policy.
      </label>

      <br /><br />

      <textarea
        rows="4"
        cols="60"
        placeholder="Special delivery instructions (Optional)"
      ></textarea>

      <br /><br />

      <button>Continue Shopping</button>

      <button>Place Order</button>

    </div>
  );
}

export default Checkout;