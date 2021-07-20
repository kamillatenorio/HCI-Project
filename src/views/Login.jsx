import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
        <div >
            <center>
                <p >Sign in for EXPERIMENTE</p>
                <form >
                    <label for="username">Username</label>
                    <input type="text" class="input_data" id="username"/><br/>
                    
                    <label for="password">Password</label>
                    <input type="text" class="input_data" id="password"/><br/>

                    <button >
                      <a href="/userprofile" >
                        Sign in                     
                      </a>
                    </button><br/>

                    <a href="#" >Forgot your password?</a>
                </form>
            </center>
        </div>
    )
  }
}

export default Login;