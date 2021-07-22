import React from "react";
import  '../App.css';

function NavBar() {
    const currentUrl = window.location.href;
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#3D5287'}} >
            <div class="container">
            <a class="navbar-brand" href="#"><span className="name">EXPERIMENT</span></a>
                <ul class="navbar-nav ml-auto my-2 my-lg-0">
                    {/* <li class="nav-item">
                        <img class="navbar-brand" src= {BRFlag} alt="BRflag" className="BRflag"/>
                    </li>
                    <li class="nav-item">
                        <img class="navbar-brand" src= {USAFlag} alt="BRflag" className="USAflag"/>
                    </li> */}
                    <div>
                       {currentUrl === "http://localhost:3000/" || currentUrl === "http://localhost:3000/login" || currentUrl === "http://localhost:3000/signup" || currentUrl === "http://localhost:3000/login?" ? (
                        <div>
                            <a class="navbar-brand" href="/login" > <span className="nameUser">Sign in </span></a> <span style={{color: '#ffffff'}}>| </span>  
                            <a class="navbar-brand" href="/signup" > <span className="nameUser">  Sign up </span></a>
                        </div>):(
                        <span>
                            <li class="nav-item">
                                <a class="navbar-brand" href="/userprofile"><span className="nameUser">Joana Vicente </span></a>
                            <a class="navbar-brand" href="#">
                                <span style={{color: '#FFFFFF'}} class="NavHeight"> <i class="fas fa-cog light"></i></span> 
                            </a>
                            <a class="navbar-brand" href="login">
                                <span style={{color: '#FFFFFF'}} class="NavHeight"><i class="fas fa-sign-out-alt"></i></span>
                            </a>
                            </li>
                        </span>
                        )}
                    </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;