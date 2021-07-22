import React, { Component } from 'react';

class SignUpMain extends Component {
  render() {
    return (
      <div id="sign_up_form" style={{ marginLeft: '35%' }}>
        <p id="text_sign_up">Sign Up for EXPERIMENTE</p>
        <form action="/login">
          <label for="username" class="labels_form">Username</label>
          <input type="text" class="input_data" id="username" /><br />
          <p class="input_description">
            (Usernames may contain alphanumeric, _ and . characters)
          </p>

          <label for="email" class="labels_form">Email</label>
          <input type="text" class="input_data" id="email" /><br />

          <label for="password" class="labels_form">Password</label>
          <input type="text" class="input_data" id="password" /><br />

          <label for="pass2" class="labels_form">Confirm your password</label>
          <input type="text" class="input_data" id="pass2" /><br />

          <button class="blue_button" id="sign_up_button">
            Create a New Account
          </button>
        </form>
      </div>
    )
  }
}

export default SignUpMain;