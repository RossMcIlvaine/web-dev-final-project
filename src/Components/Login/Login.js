import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
        const buttonHandler = () => {
        history.push("/register");
    };

    return (
        <div class="login">
            <link rel="stylesheet" type="text/css" href="../../Common/css/login.css" />
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
                <button onClick={buttonHandler}>Don't have an account?</button>
            </form>
        </div>
    );
  };
  
  export default Login;  