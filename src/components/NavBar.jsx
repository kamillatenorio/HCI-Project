import React from "react";
import  '../App.css';
import BRFlag from '../assets/img/brazil.png';
import USAFlag from '../assets/img/usa.png';

function NavBar() {
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
                        <a href="/login"><img src= {BRFlag} alt="BRflag" className="BRflag"/> </a> 
                        <a href="/login"><img src= {USAFlag} alt="BRflag" className="USAflag"/>  </a>   
                    </div>
                </div>
                <div>
                    <div className="linkSign">
                        <a href="/login">SIGN IN  |  </a>     
                        <a href="/signup">SIGN UP</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;