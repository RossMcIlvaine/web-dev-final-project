import React from "react";
import { Link } from "react-router-dom";
import '../../Common/css/menubar.css';
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../Common/Services/AuthService";

const Menubar = () => {
    const history = useHistory();

    // log out user when clicking the button on the menubar
    const logoutHandler = () => {
        logoutUser(history);
    };

    return (
        <nav>
            <ul class="navigation">
                {/* Make use of routing in navigation */}
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/workouts">Workouts</Link></li>
                <li><Link to="/exercises">Exercises</Link></li>
                <li><Link to ="/profile">Profile</Link></li>
                <li><a onClick={logoutHandler}>Log Out</a></li>
            </ul>
        </nav>
    );
  };
  
  export default Menubar;