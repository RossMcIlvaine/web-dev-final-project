import React from "react";
import { Link, Redirect } from "react-router-dom";
import { authenticationCheck } from "../../Common/Services/AuthService";
import '../../Common/css/menubar.css';

const AuthModule = () => {

  var check = authenticationCheck();

  if(!check) {
    return (
      <div>
        <h1>Welcome</h1>
          <div class="login">
              <form>
                  <p class="registerSubtext">Don't have an account?</p>
                  <button class="registerButton" type="submit"><Link to="/register">Register</Link></button>
                  <hr />
                  <p class="registerSubtext">Already have an account?</p>
                  <button class="registerButton" type="submit"><Link to="/login">Log In</Link></button>
              </form>
          </div>
      </div>
    );
  }
  else {
    return(
      <div>
        {/* send users to workouts if already logged in */}
        <Redirect to="/User/workouts"/>
      </div>
    );
  }
};

export default AuthModule;