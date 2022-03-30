import React, { useEffect, useState } from "react";
import Parse from "parse";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import WorkoutModule from "./Workout";

const WorkoutAuthModule = () => {
  const [flag, setFlag] = useState(false);
  var check = false;
  if (Parse.User.current() != null) {
    check = Parse.User.current().authenticated();
  }

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
        path="/User/workouts"
        flag={flag}
        component={WorkoutModule}
      />
    </div>
  );
};

export default WorkoutAuthModule;