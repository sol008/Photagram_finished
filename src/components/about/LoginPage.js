import React from 'react';
import {Link} from 'react-router';
import icon from './avatar1.jpg'

class LoginPage extends React.Component {
  toMain() {
    location.href = "MainPage.js";
  }

  render() {
    return(
      <div>
        <h1>Photagram</h1>

        <div className="imgcontainer">
          <img id="logicon" src={icon} alt="icon" />
        </div>

        <br/>
        <br/>

        <div className="container">
          <label><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" />

          <br/>

          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" />

          <br/>

          <label>
            <input type="checkbox" defaultChecked="checked" /> Remember me
          </label>
        </div>

        <br/>

        <div className="center">
          <button type="submit" id="sbt" className="signupbtn" onClick={this.toMain.bind(this)}>Join Us</button>
        </div>

        <br/>

        <span className="pwd">Forgot <a href="newPassword.html">password?</a></span>
        <br />

        <span className="newaccount">Don't have an <a href="registerPage.html">account?</a></span>
      </div>
    );
  }
}

export default LoginPage;
