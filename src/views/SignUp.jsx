import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div class="container">
        <center>
          <div id="sign_up_text">
            <h1>Conduct Experiments in Adaptive Gamified Learning Environments</h1>
          </div>
          
          <div id="sign_up_form">
            <h1 id="text_sign_up">Sign Up for EXPERIMENTE</h1>
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