import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  render() {
    return (
        <div >
            <center>
                <p >Sign Up for EXPERIMENTE</p>
                <form >
                    <label for="username">Username</label>
                    <input type="text" class="input_data" id="username"/><br/>
                    
                    <label for="password">Password</label>
                    <input type="text" class="input_data" id="password"/><br/>

                    <label for="email">Password</label>
                    <input type="text" class="input_data" id="email"/><br/>

                   
                    <button>
                      <a href="/login" >
                        Create a New Account
                      </a>
                    </button>
                </form>
            </center> 
        </div>
    )
  }
}

export default SignUp;