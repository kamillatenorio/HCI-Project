import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  render() {
    return (
        <div >
                <p >Sign Up for EXPERIMENTE</p>
                <form >
                    <label for="username">Username</label>
                    <input type="text" class="input_data" id="username"/>
                    
                    <label for="password">Password</label>
                    <input type="text" class="input_data" id="password"/>

                    <label for="email">Password</label>
                    <input type="text" class="input_data" id="email"/>

                   
                    <Link to={{ pathname: '/login' }}  >
                        <button onClick={this.selladd}>Create a New Account</button>
                    </Link>
                </form>
            </div>
    )
  }
}

export default SignUp;