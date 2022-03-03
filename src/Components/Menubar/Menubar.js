import React from "react";
import { Link } from "react-router-dom";
import '../../Common/css/menubar.css';

const Menubar = () => {
    return (
        <nav>
            <ul class="navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/exercises">Exercises</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
  };
  
  export default Menubar;