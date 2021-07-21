import React, { Component } from 'react';

class NavBarExp extends Component {
  render() {
    return (
        <div class="container" style={{ maxWidth: '65%' }}>
            <nav class="navbar navbar-expand-lg navbar-light mx-auto rounded" style={{backgroundColor: '#3D5287'}}>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav justify-content-between w-100">
                        <li class="nav-item active">
                            <a class="nav-link" style={{color: '#ffffff'}} href="/scope"> Scope </a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" style={{color: '#ffffff'}} href="/planning"> Planning </a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" style={{color: '#ffffff'}} href="/operation"> Conduction </a>
                        </li>
                        <li class="nav-item active ">
                            <a class="nav-link" style={{color: '#ffffff'}} href="/analysis"> Analysis & Interpretation </a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" style={{color: '#ffffff'}} href="/report"> Report </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
  }
}

export default NavBarExp;