import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import {browserHistory} from "react-router";

class RegisterPage extends React.Component {

  transition  ()  {
    browserHistory.push("main");
    this.setState({
      status: "loggedin"
    });
  }

  render() {
    return (
      <div>
        <h1>Photagram</h1>
        <hr/>

        <h2>Sign Up</h2>
        <p>Please fill in the blank to join Photogram</p>
        <hr/>

        <label><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" />
        <br/>
        <br/>

        <label><b>User Name</b></label>
        <input type="text" placeholder="Enter Name" name="userName" />
        <br/>
        <br/>

        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" />
        <br/>
        <br/>

        <label><b>Confirm Password</b></label>
        <input type="password" placeholder="Confirm Password" name="cPassword" />
        <br/>
        <br/>

        <label>
          <input type="checkbox" defaultChecked="checked" style={{marginBottom: 15}} /> Remember me
        </label>

        <p>By creating an account you agree to our <a href="#" style={{color: 'dodgerblue'}}>Terms &amp; Privacy</a>.</p>

        <div className="center">
          <button type="submit" id="sbt" className="signupbtn" onClick={this.transition.bind(this)}>Join Us</button>
        </div>

      </div>
    );
  }
}

export default RegisterPage;