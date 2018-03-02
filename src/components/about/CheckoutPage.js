import React from 'react';
import {Link} from 'react-router';
import credit from './creditcard.jpg';

class CheckoutPage extends React.Component {
  render() {
    return(
      <div>
        <h1>Photagram</h1>
        <h2>Check Out</h2>

        <div className="imgcontainer">
          <img id="checkcard" src={credit} alt="credit" />
        </div>

        <div className="container">
          <div className="column-1">
            <label><b>Cardholder's Name</b></label>
            <br />
            <input type="text" placeholder="Mr/Mrs" name="cardholder" required />
            <br />
            <label><b>Card Number</b></label>
            <br />
            <input type="password" placeholder="xxxx-xxxx-xxxx-xxxx" name="cardnumber" required />
            <br />
            <label><b>Valid Thru</b></label>
            <br />
            <input type="text" placeholder="MM / YY" name="date" required />
            <br />
            <label><b>CVV / CVC *</b></label>
            <br />
            <input type="password" placeholder="Enter three digits" name="verificaiton" required />
            <br />
            <span className="verify">* CVV or CVC is the card security code, unique three digits number on the back of your card separate from its number.</span>
          </div>
        </div>

        <br/> 

        <div className="column-2">
          <p><strong>Order Summary:</strong></p>
          <br />
          <p>The total amount is: $40</p>
          <form action="orderplaced">
            <button className="orderbtn">Order</button>
          </form>
      </div>

      </div>
    );
  }
}

export default CheckoutPage;
