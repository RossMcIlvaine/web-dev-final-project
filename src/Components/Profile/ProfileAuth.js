import React, { useEffect, useState } from "react";
import { authenticationCheck } from "../../Common/Services/AuthService";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import ProfileModule from "./Profile";

const ProfileAuthModule = () => {
  const [flag, setFlag] = useState(false);
  var check = authenticationCheck();

  useEffect(() => {
    console.log('entered profile auth');
    if (check) {
      console.log("GOOD");
      setFlag(true);
    } else {
      console.log("BAD");
      setFlag(false);
    }
  }, [check]);

  return (
    <div>
      <ProtectedRoute
        exact
        path="/User/profile"
        flag={flag}
        component={ProfileModule}
      />
    </div>
  );
};

export default ProfileAuthModule;