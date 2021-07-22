import React, { Component } from 'react';

class Reset extends Component {
  render() {
    return (
      <div id="sign_up_form" style={{marginLeft:'35%'}}>
            <p id="text_sign_up">Password reset</p>
            <form action="/login">
              <label for="email" class="labels_form">Email</label>
              <input type="text" class="form-control" id="email" placeholder="Enter your email" /><br />

              <button class="blue_button" id="sign_up_button"
              style={{width:'40%', float:'left'}}>
                Send
              </button>
            </form>
          </div>
    )
  }
}

export default Reset;