import React from "react";
import Menubar from "../Menubar/Menubar";
import { authenticationCheck } from "../../Common/Services/AuthService";
import { editUser } from "../../Common/Services/ProfileService";
import { Link, useHistory } from "react-router-dom";
import '../../Common/css/workout.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Parse from "parse";

const theme = createTheme({
  typography: {
   "fontFamily": `"Nunito", sans-serif`,
  }
});

const ProfileModule = () => {
    const history = useHistory();
    var check = authenticationCheck();
    let profile = Parse.User.current();
    let firstName = profile.get("firstName");
    let lastName = profile.get("lastName");
    let username = profile.get("username");
    let email = profile.get("email");

    const saveProfile = (e) => {
        e.preventDefault();
        console.log(e.target);
        const data = new FormData(e.target);
        editUser(data);
        history.push("/User/profile");
    }

    if(check) {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Menubar/>
                    <form onSubmit={saveProfile} autoComplete="off">
                        <div className="form-group">
                        <label>First Name</label>
                        <p>First Name</p>
                        <input
                            type="text"
                            className="form-control"
                            id="first-name-input"
                            defaultValue={firstName}
                            name="firstName"
                            placeholder={firstName}
                        />
                        </div>
                        <div className="form-group">
                        <label>Last Name</label>
                        <p>Last Name</p>
                        <input
                            type="text"
                            className="form-control"
                            id="last-name-input"
                            defaultValue={lastName}
                            name="lastName"
                            placeholder={lastName}
                        />
                        </div>
                        <div className="form-group">
                        <label>Username</label>
                        <p>Username</p>
                        <input
                            type="text"
                            className="form-control"
                            id="username-input"
                            defaultValue={username}
                            name="username"
                            placeholder={username}
                        />
                        </div>
                        <div className="form-group">
                        <label>Email</label>
                        <p>Email</p>
                        <input
                            type="email"
                            className="form-control"
                            id="email-input"
                            defaultValue={email}
                            name="email"
                            placeholder={email}
                        />
                        </div>
                        {/* <div className="form-group">
                            <label>Password</label>
                            <br />
                            <input
                            type="password"
                            className="form-control"
                            id="password-input"
                            value={password}
                            onChange={onChange}
                            name="password"
                            min="0"
                        />
                        </div> */}
                        <button type="submit" onSubmit={saveProfile}>Save Changes</button>
                    </form>
                </div>
            </ThemeProvider>
        );
      }
      else {
        return(
          <div>
            {/* Two buttons to send users to login or register if they reach this */}
            <p>You shouldn't be here! <Link to="/login">Log In</Link> or <Link to="/register">Register</Link> to view your page.</p>
          </div>
        );
      }
};

export default ProfileModule;