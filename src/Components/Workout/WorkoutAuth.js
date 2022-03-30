import React, { useEffect, useState } from "react";
import { authenticationCheck } from "../../Common/Services/AuthService";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import WorkoutModule from "./Workout";

const WorkoutAuthModule = () => {
  const [flag, setFlag] = useState(false);
  var check = authenticationCheck();

  useEffect(() => {
    console.log('entered workout auth');
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
        path="/User/workouts"
        flag={flag}
        component={WorkoutModule}
      />
    </div>
  );
};

export default WorkoutAuthModule;