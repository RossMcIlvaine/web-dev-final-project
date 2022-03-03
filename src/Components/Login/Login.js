import React from "react";
import { useHistory } from "react-router-dom";
import '../../Common/css/login.css';

const Login = () => {
    const history = useHistory();
        const buttonHandler = () => {
        history.push("/register");
    };

    return (
        <div>
            <h1 class="header">
                Sign In to Your Account
            </h1>
            <div class="login">
                <form id="login">
                    <label for="email"><b>Email</b></label>
                    <input
                    type="text"
                    placeholder="Enter email"
                    name="email"
                    id="email"
                    required
                    />
                    <br /><br />
                    <label for="password"><b>Password</b></label>
                    <input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    id="password"
                    required
                    />
                    <br /><br />
                    <hr />
                    <button class="button" type="submit">Log In</button>
                    <p class="subtext">Don't have an account?</p>
                </form>
            </div>
        </div>
    );
  };
  
  export default Login;  