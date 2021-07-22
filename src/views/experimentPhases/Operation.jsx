import React, { Component } from 'react';
import  '../../App.css';
import NavBarExp from '../../components/NavBarExp';
import Navigation from '../Navigation';

class Operation extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <NavBarExp/>
        <div class="container" style={{ maxWidth: '65%' }}>
              <p style={{ marginLeft: '14%' }}>The experiment operation will be made by another tool, which can be accessed <a href="#" target="__Blank">HERE</a>.</p>
        </div>
      </div>
    )
  }
}

export default Operation;