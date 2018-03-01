import React from 'react';
import {Link} from 'react-router';
import six from './6.jpg';
import eleven from './11.jpg';
var divStyle = {
  color: 'Blue'
};

// var imageName = require ('./6.jpg');





class FakemainPage extends React.Component {

  pop  ()  {
    alert("About Us");
  }

  render() {
    return (



      <div>

     <li><a href="Pictures.html">Photographs</a></li>
     <li><a href="Videos.html">Videos</a></li>
     <li><a href="Paintings.html">Paintings</a></li>
                        


    <h1 style={divStyle}>Editor's Pick</h1>



   <div className="column">
    <img id="myImg6"  src = {six} alt="six" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>


  <div className="column">
    <img id="myImg7"  src="7.jpg"  className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>

  <div className="column">
    <img id="myImg8"  src="8.jpg"  className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg14"  src="14.jpg"  className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg14"  src="15.jpg"  className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
<h1 >Photographs  <a href="Pictures.html" >(View All)</a></h1> 


     <div className="column">
    <img id="myImg1"  src="1.jpg"  className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg2"  src="2.jpg"  className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg3"  src="3.jpg"  className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg4"  src="4.jpg"  className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg5"  src="5.jpg" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>





<h1 >Videos  <a href="Videos.html" >(View All)</a></h1>

<div className="row">
  <div className="column">
    <iframe src="https://www.youtube.com/embed/raNzEp6S7X8" ></iframe>
    <a href="profiles.html">➣➣➣</a>
  </div>

  <div className="column">
    <iframe src="https://www.youtube.com/embed/Ml90FJK-emo"></iframe>
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <iframe src="https://www.youtube.com/embed/cOtigA2G1GQ"></iframe>
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <iframe src="https://www.youtube.com/embed/ZCIb-R38XeU"></iframe>
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <iframe src="https://www.youtube.com/embed/rDLJCQpExJA"></iframe>
    <a href="profiles.html">➣➣➣</a>
  </div>

  </div>

 <h1 >Paintings  <a href="Paintings.html" target="_top">(View All)</a></h1>      

<div className="row">
   <div className="column">
    <img id="myImg11"  src = {eleven} alt="eleven"  className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg12"  src="12.jpg"  className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg13"  src="13.jpg"  className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg14"  src="14.jpg" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg15"  src="15.jpg"  className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
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

