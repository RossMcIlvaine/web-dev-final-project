import React, { useEffect, useState } from "react";
import { authenticationCheck } from "../../Common/Services/AuthService";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import EditProfileForm from "./EditProfile";

const EditProfileAuthModule = () => {
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
        path="/User/profile-edit"
        flag={flag}
        component={EditProfileForm}
      />
    </div>
  );
};

export default EditProfileAuthModule;