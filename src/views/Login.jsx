import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div id="sign_up_form" style={{marginLeft:'35%'}}>
            <p id="text_sign_up" class="mainText">Sign In for EXPERIMENTE</p>
            <form action="/userprofile">
              <label for="username" class="labels_form">Username</label>
              <input type="text" class="form-control" id="username" placeholder="Enter your username"/><br />

              <label for="password" class="labels_form">Password</label>
              <input type="text" class="form-control" id="password" placeholder="Enter your password"/><br />

              <button class="blue_button" id="sign_up_button"
              style={{width:'40%', float:'left'}} >
                Sign in
              </button>
              <a style={{fontWeight: 'normal',fontSize:'large', float: 'right', marginTop: '25px'}}
                href='/reset'>Forgot your password?</a>
            </form>
          </div>
    )
  }
}

export default Login;