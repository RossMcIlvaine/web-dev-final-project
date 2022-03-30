import React, { useEffect, useState } from "react";
import Parse from "parse";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import ExerciseModule from "./Exercise";

const ExerciseAuthModule = () => {
  const [flag, setFlag] = useState(false);
  // console.log(Parse.User.current());
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
        path="/User/exercises"
        flag={flag}
        component={ExerciseModule}
      />
    </div>
  );
};

export default ExerciseAuthModule;