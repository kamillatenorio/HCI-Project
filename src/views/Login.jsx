import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div id="sign_up_form" style={{marginLeft:'35%'}}>
            <p id="text_sign_up">Sign In for EXPERIMENTE</p>
            <form action="/userprofile">
              <label for="username" class="labels_form">Username</label>
              <input type="text" class="input_data" id="username" /><br />

              <label for="password" class="labels_form">Password</label>
              <input type="text" class="input_data" id="password" /><br />

              <button class="blue_button" id="sign_up_button"
              style={{width:'40%', float:'left'}}>
                Sign in
              </button>
              <a style={{fontWeight: 'normal',fontSize:'large', float: 'right', marginTop: '25px'}}
                href='/'>Forgot your password?</a>
            </form>
          </div>
    )
  }
}

export default Login;