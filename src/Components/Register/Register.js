import React from "react";
import '../../Common/css/register.css';

const Register = () => {
    return (
        <div>
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
                <button class="registerButton" type="submit">Sign Up</button>
                <p class="registerSubtext">Already have an account?</p>
            </form>
            </div>
        </div>
    );
  };
  
  export default Register;