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

    <img id="myImg6"  src = {sixteen} alt="sixteen" />
    <h1 >First and Last Name</h1> 
    <p> SanDiego, CA </p>

      <div className="topnav">
     <a >Intro</a>
     <a >Works</a>
     <a >Reviews</a>
    </div>

        <h2>Intro</h2>
        <p  id = "d"></p>
        <input type="text" placeholder="Enter something..." id= "new"  />
        <button className = "button" onclick={this.edit.bind(this)} >Edit Intro</button>
        <h2>Works</h2>

        <h3>Pictures</h3>
        <table>
      <tr id="row1">
      <th ><div className="img_container" id="p1" ><img src = {one} alt="one"  /><div className="mask">description...</div></div></th>
      <th ><div className="img_container" id="p2" ><img src = {two} alt="two"  /><div className="mask">description...</div></div></th>
      <th ><div className="img_container" id="p3" ><img src = {three} alt="three"  /><div className="mask">description...</div></div></th>
      </tr>
    </table>


        <h3>Paintings</h3>
        <h3>Photograph</h3>


    <h2>Reviews</h2>
    <p>Some text..</p>

       <form action="myoffers" method="get">
          <button class = "button button2">My Offer</button>

      </form>
            <form action="myorder" method="get">
          <button  class = "button button3">My Order</button>
           </form>

      <div class="card">
        <h3>Popular Post</h3>
        <div className="fakeimg"><p>Image</p></div>
        <div className="fakeimg"><p>Image</p></div>
        <div className="fakeimg"><p>Image</p></div>
      </div>
      <div class="card">
        <h3>Follow Me</h3>
        <p>Some text..</p>
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

