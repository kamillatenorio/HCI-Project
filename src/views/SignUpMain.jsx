import React, { Component } from 'react';

class SignUpMain extends Component {
  render() {
    return (
      <div id="sign_up_form" style={{ marginLeft: '35%' }}>
        <h1 id="text_sign_up">Sign Up for EXPERIMENTE</h1>
        <form action="/login">
          <label for="username" class="labels_form">Username</label>
          <input type="text" class="form-control" id="username" placeholder="Enter your username"/><br />
          <p class="input_description">
            (Usernames may contain alphanumeric, _ and . characters)
          </p>

          <label for="email" class="labels_form">Email</label>
          <input type="text" class="form-control" id="email" placeholder="Enter your email"/><br />

          <label for="password" class="labels_form">Password</label>
          <input type="text" class="form-control" id="password" placeholder="Enter your password"/><br />

          <label for="pass2" class="labels_form">Confirm your password</label>
          <input type="text" class="form-control" id="pass2" placeholder="Enter your password again"/><br />

          <button class="blue_button" id="sign_up_button">
            Create a New Account
          </button>
        </form>
      </div>
    )
  }
}

export default SignUpMain;