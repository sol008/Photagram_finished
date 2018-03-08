import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';


import one from './1.jpg';
import two from './2.jpg';
import three from './3.jpg';
import four from './4.jpg';
import five from './5.jpg';
// import six from './6.jpg';
import seven from './7.jpg';
import eight from './8.jpg';
import eleven from './11.jpg';
import twelve from './12.jpg';
import thirteen from './13.jpg';
import fourteen from './14.jpg';
import fifteen from './15.jpg';

let divStyle = {
  color: 'Blue'
};

class MainPage extends React.Component {

  pop  ()  {
    alert("About Us");
  }

  render() {
    return (
      <div>

     

     <li><IndexLink to="/picture" activeClassName="active">Photographs</IndexLink></li>
     <li><IndexLink to="/video" activeClassName="active">Videos</IndexLink></li>
     <li><IndexLink to="/painting" activeClassName="active">Paintings</IndexLink></li>




<h1>Editor's Pick</h1>



<div className="column">
    <img id="myImg6"  src = {require('./6.jpg')} alt="six" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
</div>


<div className="column">
    <img id="myImg7"  src={seven} alt="seven" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
</div>

<div className="column">
    <img id="myImg8"  src={eight} alt="eight" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
</div>

<div className="column">
    <img id="myImg14"  src="14.jpg" alt="fourteen" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
</div>

<div className="column">
    <img id="myImg14"  src="15.jpg" alt="fifteen" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
</div>


<h1 >Photographs  <a href="Pictures.html" >(View All)</a></h1>


<div className="column">
    <img id="myImg1"  src={one} alt="one" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
</div>

<div className="column">
    <img id="myImg2"  src={two} alt="two" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
</div>

<div className="column">
    <img id="myImg3"  src={three} alt="three" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
</div>

<div className="column">
    <img id="myImg4"  src={four} alt="four" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
</div>

<div className="column">
    <img id="myImg5"  src={five} alt="five" className="hover-shadow cursor" />
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
    <img id="myImg12"  src={twelve} alt="twelve" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
</div>

<div className="column">
    <img id="myImg13"  src={thirteen} alt="thirteen" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
</div>

<div className="column">
    <img id="myImg14"  src={fourteen} alt="fourteen" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
</div>

<div className="column">
    <img id="myImg15"  src={fifteen} alt="fifteen"  className="hover-shadow cursor" />
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

export default MainPage;
