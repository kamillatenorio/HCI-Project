import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
                        <li class="nav-item">
                            <NavLink to="/scope" className="nav-link" style={{color: '#ffffff'}} activeStyle={{ fontWeight: 'bold' }}> 
                                Scope 
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/planning" className="nav-link" style={{color: '#ffffff'}} activeStyle={{ fontWeight: 'bold' }}> 
                                Planning 
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/operation" className="nav-link" style={{color: '#ffffff'}} activeStyle={{ fontWeight: 'bold' }}> 
                                Conduction 
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/analysis" className="nav-link" style={{color: '#ffffff'}} activeStyle={{ fontWeight: 'bold' }}> 
                                Analysis & Interpretation 
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/report" className="nav-link" style={{color: '#ffffff'}} activeStyle={{ fontWeight: 'bold' }}> 
                                Report 
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <br/>
        </div>
    )
  }
}

export default NavBarExp;