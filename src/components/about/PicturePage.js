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


var divStyle = {
  color: 'Blue'
};

class PicturePage extends React.Component {

  pop  ()  {
    alert("About Us");
  }

  render() {
    return (
      <div>

     <li><IndexLink to="/picture" activeClassName="active">Photographs</IndexLink></li>
     <li><IndexLink to="/video" activeClassName="active">Videos</IndexLink></li>
     <li><IndexLink to="/painting" activeClassName="active">Paintings</IndexLink></li>




<h1 >Photographs</h1>
<h4>Sort By   <select name="sort">
            <option value="Newest">Newest</option>
            <option value="View Count">View Count</option>
            <option value="Like Count">Like Count</option>
            <option value="Comment Count">Comment Count</option>
        </select></h4> 


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




<button onClick={this.pop.bind(this)}>
  About us
</button>

<p>Copyright &copy;photagram.com</p>

</div>

);
}
}

export default PicturePage;
