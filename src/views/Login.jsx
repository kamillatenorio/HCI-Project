import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
        <div >
                <p >Sign in for EXPERIMENTE</p>
                <form >
                    <label for="username">Username</label>
                    <input type="text" class="input_data" id="username"/>
                    
                    <label for="password">Password</label>
                    <input type="text" class="input_data" id="password"/>

                    <Link to={{ pathname: '/userprofile' }}  >
                        <button onClick={this.selladd}>Sign in</button>
                    </Link>

                    <a href="#" >Forgot your password?</a>
                </form>
            </div>
    )
  }
}

export default Login;