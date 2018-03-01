import React from 'react';
import {Link} from 'react-router';

class OrderPlacedPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Photagram</h1>
        <br/>
        <p>Congratulations! Your order is on the way! </p>
        <br/>
        <p>An email confirmation has been sent to you. Thank you for shopping with us</p>
        <br/>
        <p>
        Click here to your email:
        <a href="mailto:@example.com?Subject=Congratulations">Email</a>
        </p>
      </div>
    );
  }
}

export default OrderPlacedPage;
