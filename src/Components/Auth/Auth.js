import React from "react";
import { Link, useHistory } from "react-router-dom";
import '../../Common/css/menubar.css';

const AuthModule = () => {
  const history = useHistory();

  const buttonHandler = () => {
    history.push("/home");
  };

  return (
    <div>
      <h1>Welcome</h1>
        <div class="login">
            <form>
                <p class="registerSubtext">Don't have an account?</p>
                <button class="registerButton" type="submit"><Link to="/register">Sign Up</Link></button>
                <hr />
                <p class="registerSubtext">Already have an account?</p>
                <button class="registerButton" type="submit"><Link to="/login">Log In</Link></button>
            </form>
        </div>
    </div>
  );
};

export default AuthModule;