import React from "react";
import { Link } from "react-router-dom";
import '../../Common/css/menubar.css';
import { useHistory } from "react-router-dom";
import Parse from "parse";

const Menubar = () => {
    const history = useHistory();

    // log out user when clicking the button on the menubar
    const logoutHandler = () => {
        Parse.User.logOut();
        history.push("/");
      };

    return (
        <nav>
            <ul class="navigation">
                {/* Make use of routing in navigation */}
                <li><Link to="/workouts">Workouts</Link></li>
                <li><Link to="/exercises">Exercises</Link></li>
                <li><button onClick={logoutHandler}>Log Out</button></li>
            </ul>
        </nav>
    );
  };
  
  export default Menubar;