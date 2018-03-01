import React from 'react';
import {Link} from 'react-router';
import one from './1.jpg'
import two from './2.jpg'
import three from './3.jpg'
import six from './6.jpg';
import eleven from './11.jpg';
import sixteen from './16.jpg';
var divStyle = {
  color: 'Blue'
};

// var imageName = require ('./6.jpg');





class FakemainPage extends React.Component {

  pop  ()  {
    alert("About Us");
  }

   edit() {
    var y = document.getElementById("new").value; 
    document.getElementById("d").innerHTML = y;
    if (document.getElementById("new").style.display === "none"){
        document.getElementById("new").style.display = "block";
    }
    else 
      {document.getElementById("new").style.display = "none";}

  }
  render() {
    return (

      <div>


    <h1 >Your Order</h1> 
        <form id="tfnewsearch" method="get" action="http://www.google.com">
          <input type="text" className="tftextinput" name="q" size="21" maxlength="120"/>
          <input type="submit" value="search" className="tfbutton"/>
        </form>

      <div className="topnav">
     <a >Orders</a>
     <a >Cancelled Orders</a>
    </div>

    <div className= "orderInfo">
    <p>Order Placed</p>
    <p>January 18, 2018</p>
    </div>

    <div className= "orderInfo">
    <p>Total</p>
    <p>$33.70</p>
    </div>

    <div className= "orderInfo" >
    <p>Order #12345678</p>
    <p>Order Details</p>
    </div>


           <button className = "button"  >Track Order</button>
        <button className = "button button4" >Leave feedback</button>
        <button className = "button button4"  >Write a product review</button>

    <div className="card">
      <h3>Buy It again</h3>
      <div class="fakeimg"><p>Item</p></div>
      <div class="fakeimg"><p>Item</p></div>
      <div class="fakeimg"><p>Item</p></div>
    </div>
      
<button onClick={this.pop.bind(this)}> 
  About us
</button>

  <p>Copyright &copy;photagram.com</p>
</div>




);
  }

}

export default FakemainPage;

