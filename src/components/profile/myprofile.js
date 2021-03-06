import React from 'react';
import {Link} from 'react-router';
import one from './1.jpg'
import two from './2.jpg'
import three from './3.jpg'
import six from './6.jpg';
import eleven from './11.jpg';
import sixteen from './16.jpg';
import {browserHistory} from 'react-router';
var divStyle = {
  color: 'Blue'
};

// var imageName = require ('./6.jpg');

      // class Image extends React.Component{
      //   render(){
      //   return(
      //     <div className="img_container" 
      //     id={props.id} 
      //     onClick={()=>this.imgOnclick("p1",0)}>
      //     <img src={require('./1.jpg')} 
      //     style={{"width":"240px","height":"240px"}} />
      //     </div>
      //   );
      // }
      // }

      function Image (props){

        return(
          <th >
          <div className="img_container" 
          id={props.id} 
          onClick={props.click}>
          <img src={require(props.pic)} 
          style={{"width":"240px","height":"240px"}} />
          
          <div className="mask">description...</div>
          </div>
          </th>
        );
      }

class myprofile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      a:[3,3,3]

    }
  }

  pop  ()  {
    alert("About Us");
  }


           imgOnclick(id,num){
              var ar = this.state.a;
            // alert(d);
          var row1 = document.getElementById("row1");
          // var row2 = document.getElementById("row2");
          // var row3 = document.getElementById("row3");
          // var rows = [row1,row2,row3]
          document.getElementById(id).style.display = "none";
              // if(row1.cells.length < 4){
            if(num < 3){
              plus1.style.display = "block";
              ar[0] = ar[0] - 1;
            }
            else if(num < 6){
              plus2.style.display = "block";
              ar[1] = ar[1] - 1;
            }
            else{
              plus3.style.display = "block";
              ar[2] = ar[2] - 1;
            }

          }
      

      plusOnclick(num){
            var ar = this.state.a;
                if(num == 0){
                  
                  ar[num] = ar[num] + 1;
                  // alert(ar[num]);
                  if(ar[num] == 1){
                    p1.style.display = "block";
                  }
                  else if(ar[num] == 2){
                    p2.style.display = "block";
                  }
                  else if(ar[num] == 3){
                    p3.style.display = "block";
                    plus1.style.display = "none";
                  }
                }

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

    redirectToAddCoursePage() {
    browserHistory.push('/courses');
    console.log("the button is pressed")
  }

  render() {
    return (

      <div className="body">

      <div className="header">
</div>

      <div className="row">
      <div className="leftcolumn">
       <div className="card">
    <img id="myImg6"  src = {sixteen} alt="sixteen" style={{"width":"150px","height":"100px"}}/>
    <h1 >First and Last Name</h1> 
    <p> SanDiego, CA </p>
      </div>


      <div className="topnav">
     <a >Intro</a>
     <a >Works</a>
     <a >Reviews</a>
    </div>

        <h2>Intro</h2>
        <p  id = "d"></p>
        <input type="text" placeholder="Enter something..." id= "new" style = {{"display":"none"}} />
        <button className = "button button2" onClick={this.edit.bind(this)} >Edit Intro</button>
        <h2>Works</h2>

        <h3>Pictures</h3>
        <table>
      <tr id="row1">
      <Image id ="p1" pic={'./1.jpg'} click={() => this.imgOnclick("p1",0)} />
      <Image id ="p2" pic={'./2.jpg'} click={() => this.imgOnclick("p2",1)} />
      <Image id ="p3" pic={'./3.jpg'} click={() => this.imgOnclick("p3",2)} />
      <th ><img src={require('./plus_img.png')} id="plus1" onClick={()=>this.plusOnclick(0)} style={{"width":"240px","height":"240px","display":"none"}} /></th>
      </tr>
    </table>



    <h2>Reviews</h2>
    <p>Some text..</p>
    </div>


    <div className="rightcolumn">
      <div className="card">
       <div className="checkOffer">

          <button className = "button button2" onClick={this.redirectToAddCoursePage} >My Offer</button>


            <form action="myorder" method="get">
          <button  className = "button button3">My Order</button>
           </form>
           </div>
           </div>
      <div className="card">
        <h3>Popular Post</h3>
        <div className="fakeimg"><p>Image</p></div>
        <div className="fakeimg"><p>Image</p></div>
        <div className="fakeimg"><p>Image</p></div>
      </div>
      <div className="card">
        <h3>Follow Me</h3>
        <p>Some text..</p>
      </div>
      </div>  
      </div>

<div className="footer">
<button onClick={this.pop.bind(this)}> 
  About us
</button>

  <p>Copyright &copy;photagram.com</p>
</div>

</div>


);
  }

}

export default myprofile;

