import React from "react";
import  '../App.css';
import BRFlag from '../assets/img/brazil.png';
import USAFlag from '../assets/img/usa.png';
import { Router } from 'react-router-dom';


function NavBar() {
    const currentUrl = window.location.href;
    // const currentUrl = useLocation();
    return (
        <div className="NavBar"> 
            <div className="leftSide">
                <div className="links">
                    <a href="/login">EXPERIMENT</a>
                </div>
            </div>
            <div className="rightSide">
                <div>
                    <div className="links">
                        <img src= {BRFlag} alt="BRflag" className="BRflag"/> &nbsp;
                        <img src= {USAFlag} alt="BRflag" className="USAflag"/>  &nbsp;
                    </div>
                </div>
                <div>
                {currentUrl === "http://localhost:3000/" || currentUrl === "http://localhost:3000/login" || currentUrl === "http://localhost:3000/signup" ? (
                    <div className="linkSign">
                        <a href="/login"> <b>SIGN IN </b> |  </a>     
                        <a href="/signup"> <b>SIGN UP </b> </a>
                    </div>):(
                    <div className="linkSign">
                        <a href="/login"> <b>LOG OUT </b></a>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NavBar;