import React, { useEffect, useState } from "react";
import { authenticationCheck } from "../../Common/Services/AuthService";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import Home from "./Home";

const HomeAuthModule = () => {
  const [flag, setFlag] = useState(false);
  var check = authenticationCheck();

  useEffect(() => {
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
        path="/User/home"
        flag={flag}
        component={Home}
      />
    </div>
  );
};

export default HomeAuthModule;