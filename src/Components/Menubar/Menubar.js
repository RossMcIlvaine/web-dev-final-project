import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import '../../Common/css/menubar.css';

const Menubar = () => {
    return (
        <nav>
            <ul class="navigation">
                <BrowserRouter>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                </BrowserRouter>
            </ul>
        </nav>
    );
  };
  
  export default Menubar;