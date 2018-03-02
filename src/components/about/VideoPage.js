import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';




var divStyle = {
  color: 'Blue'
};

class VideoPage extends React.Component {

  pop  ()  {
    alert("About Us");
  }

  render() {
    return (
      <div>

     <li><IndexLink to="/picture" activeClassName="active">Photographs</IndexLink></li>
     <li><IndexLink to="/video" activeClassName="active">Videos</IndexLink></li>
     <li><IndexLink to="/painting" activeClassName="active">Paintings</IndexLink></li>




<h1 >Videos</h1>
<h4>Sort By   <select name="sort">
            <option value="Newest">Newest</option>
            <option value="View Count">View Count</option>
            <option value="Like Count">Like Count</option>
            <option value="Comment Count">Comment Count</option>
        </select></h4> 

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




<button onClick={this.pop.bind(this)}>
  About us
</button>

<p>Copyright &copy;photagram.com</p>

</div>

);
}
}

export default VideoPage;
