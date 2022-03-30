import React, { useEffect, useState } from "react";
import { authenticationCheck } from "../../Common/Services/AuthService";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import ExerciseModule from "./Exercise";

const ExerciseAuthModule = () => {
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
        path="/User/exercises"
        flag={flag}
        component={ExerciseModule}
      />
    </div>
  );
};

export default ExerciseAuthModule;