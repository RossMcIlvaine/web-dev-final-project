import React from "react";
import Menubar from "../Menubar/Menubar";
import { authenticationCheck, adminCheck } from "../../Common/Services/AuthService";
import { sendEmail } from "../../Common/Services/EmailService";
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
    var isAdmin = adminCheck();
    let profile = Parse.User.current();

    const swapMode = () => {
      history.push("/User/profile-edit");
    }
    
    const emailButtonHandler = (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      sendEmail(data.get("recipient"), data.get("message"));
      alert("Emails Sent");
    }

    if(check && isAdmin) {
      return (
        <ThemeProvider theme={theme}>
              <Menubar/>
              <div class="profile">
                  <h1 class="header">My Profile</h1>
                  <h2>First Name: {profile.get("firstName")}</h2>
                  <h2>Last Name: {profile.get("lastName")}</h2>
                  <h2>Username: {profile.get("username")}</h2>
                  <h2>Email: {profile.get("email")}</h2>
                  <h2>Account Created: {profile.get("createdAt").toDateString()}</h2>
                  <button class="edit-button" type='button' onClick={swapMode}>Edit Profile</button>
                <h3>Create Email</h3>
                <form class="email-form" onSubmit={emailButtonHandler}> 
                  <p>Message</p>
                  <input type="text" name="message"></input>
                  <p>Recipient Name</p>
                  <input type="text" name="recipient"></input>
                  <button class="edit-button" type="submit" onSubmit={emailButtonHandler}>Send</button>
                </form>
              </div>
        </ThemeProvider>
      );
    }
    else if(check && !profile.get("isAdmin"))  {
      return (
        <ThemeProvider theme={theme}>
            <div>
              <Menubar/>
              <h1 class="header">My Profile</h1>
              <h2>First Name: {profile.get("firstName")}</h2>
              <h2>Last Name: {profile.get("lastName")}</h2>
              <h2>Username: {profile.get("username")}</h2>
              <h2>Email: {profile.get("email")}</h2>
              <h2>Account Created: {profile.get("createdAt").toDateString()}</h2>
              <button type='button' onClick={swapMode}>Edit Profile</button>
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