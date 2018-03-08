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
function Deal(props){
  return(
      <td className= "card"  >
  <span className="close">&times;</span>
        <h2 >{props.id} </h2>
        <p> {props.type}</p>
      <hr  />
      <p> ${props.price}/{props.type}</p>
      </td>
  );
}




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

        <h2 >My current offers</h2>
<table>
 <tr>
      <Deal id = {"1"} type ={"photo"} price={"35"}/>
      <Deal id = {"2"} type ={"picture"} price={"30"}/>
      <Deal id = {"3"} type ={"artwork"} price={"25"}/>



      </tr>

      </table>
        <div>
            <img id="myImg11"  src = {eleven} alt="eleven"  className="hover-shadow cursor" />
        <h5 >Jessica A.</h5>
        <p >Singing</p>
        <p >Geneieve St.Solona</p>
        <p >Beach CA</p>

        <h5>60-minute lessons</h5>
        <p>Some text...</p>
        </div>

          <form action="checkout" method="get">
          <button  class = "button button3">Continue</button>
           </form>

<button onClick={this.pop.bind(this)}> 
  About us
</button>

  <p>Copyright &copy;photagram.com</p>
</div>




);
  }

}

export default FakemainPage;

