import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div class="container">
        <center>
          <div id="sign_up_text">
            <p>Conduct Experiments in Adaptive Gamified Learning Environments</p>
          </div>
          
          <div id="sign_up_form">
            <p id="text_sign_up">Sign Up for EXPERIMENTE</p>
            <form action="/login">
              <label for="username" class="labels_form">Username</label>
              <input type="text" class="form-control" id="username" placeholder="Enter your username"/><br />
              <p class="input_description">
                (Usernames may contain alphanumeric, _ and . characters)
              </p>

              <label for="password" class="labels_form">Password</label>
              <input type="text" class="form-control" id="password" placeholder="Enter your password"/><br />

              <label for="email" class="labels_form">Email</label>
              <input type="text" class="form-control" id="email" placeholder="Enter your email"/><br />
              <button class="blue_button" id="sign_up_button">
                Create a New Account
              </button>
            </form>
          </div>
        </center>
      </div>
    )
  }
}

export default SignUp;