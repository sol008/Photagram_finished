import React from 'react';
import {Link} from 'react-router';
import background from './cool_background.png';

var backStyle = {
  width: "100",
  height: "100"
};

class NewPasswordPage extends React.Component {
  resetPass() {
    var newPass = document.getElementById("new").value;
  }

  checkReset() {
    var y = document.getElementById("new").value;
    document.getElementById("d").innerHTML = y;
  }

  render() {
    return(

      <div>
        <div className="wrapHead">
          <h1>Photagram</h1>
        </div>

        <div className="center">
          Old Password: <input type="password" id="old" />
          <br />
          New Password: <input type="password" id="new" />
          <br />
          <p>Click the button to reset your password</p>

          <button  onClick={this.resetPass.bind(this)}>reset</button>
          <button id='b1' onClick={this.checkReset.bind(this)}>check</button>

          <br />

          <p>Your new password is:</p>
          <p id="d" />
        </div>

      </div>
    );
  }
}

export default NewPasswordPage;
