import React from "react";
import Menubar from "../Menubar/Menubar";
import { authenticationCheck } from "../../Common/Services/AuthService";
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

    const saveProfile = () => {
      history.push("/profile");
    }

    if(check) {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Menubar/>
                    <button type='button' onClick={saveProfile}>Save Profile</button>
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