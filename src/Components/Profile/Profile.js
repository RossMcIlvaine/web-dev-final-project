import React, { useEffect, useState } from "react";
import Menubar from "../Menubar/Menubar";
import { authenticationCheck } from "../../Common/Services/AuthService";
import { Link } from "react-router-dom";
import '../../Common/css/workout.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Parse from "parse";

const theme = createTheme({
  typography: {
   "fontFamily": `"Nunito", sans-serif`,
  }
});

const ProfileModule = () => {
    var check = authenticationCheck();
    let profile = Parse.User.current();

    if(check) {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Menubar/>
                    <h1 class="header">My Profile</h1>
                    <h2>First Name: {profile.get("firstName")}</h2>
                    <h2>Last Name: {profile.get("lastName")}</h2>
                    <h2>Username: {profile.get("username")}</h2>
                    <h2>Email: {profile.get("email")}</h2>
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