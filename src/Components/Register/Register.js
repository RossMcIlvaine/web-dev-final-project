import React from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
    const history = useHistory();
        const buttonHandler = () => {
        history.push("/login");
    };

    return (
        <div>
            <link rel="stylesheet" type="text/css" href="../../Common/css/register.css" />
            <h1>Create an Account</h1>
            <div class="register">
            <form>
                <label for="firstName"><b>First Name</b></label>
                <input
                type="text"
                placeholder="Enter first name"
                name="firstName"
                id="firstName"
                required
                />
                <br /><br />
                <label for="lastName"><b>Last Name</b></label>
                <input
                type="text"
                placeholder="Enter last name"
                name="lastName"
                id="lastName"
                required
                />
                <br /><br />
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
                <p class="subtext">
                    By creating an account you agree to our
                    <a href="#">Terms &#38; Privacy</a>.
                </p>
                <button class="button" type="submit">Sign Up</button>
                <button onClick={buttonHandler}>Already have an account?</button>
            </form>
            </div>
        </div>
    );
  };
  
  export default Register;