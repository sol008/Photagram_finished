import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import one from './1.jpg';
import two from './2.jpg';
import three from './3.jpg';
import four from './4.jpg';
import five from './5.jpg';
import six from './6.jpg';
import seven from './7.jpg';
import eight from './8.jpg';
import eleven from './11.jpg';
import twelve from './12.jpg';
import thirteen from './13.jpg';
import fourteen from './14.jpg';
import fifteen from './15.jpg';

var divStyle = {
  color: 'Blue'
};

class PaintingPage extends React.Component {

  pop  ()  {
    alert("About Us");
  }

  render() {
    return (
      <div>

     <li><IndexLink to="/picture" activeClassName="active">Photographs</IndexLink></li>
     <li><IndexLink to="/video" activeClassName="active">Videos</IndexLink></li>
     <li><IndexLink to="/painting" activeClassName="active">Paintings</IndexLink></li>

 <h1>Paintings</h1>
        <h4>Sort By   <select name="sort">
            <option value="Newest">Newest</option>
            <option value="View Count">View Count</option>
            <option value="Like Count">Like Count</option>
            <option value="Comment Count">Comment Count</option>
        </select></h4> 

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
    <img id="myImg15"  src={fifteen} alt="fifteen" className="hover-shadow cursor" />
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

export default PaintingPage;
