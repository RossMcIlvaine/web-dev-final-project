import React, { useEffect, useState } from "react";
import getAllExercises from "../../Common/Services/GetExercise";
import Menubar from "../Menubar/Menubar";
import ExerciseTable from "./ExerciseTable";
import { authenticationCheck } from "../../Common/Services/AuthService";
import { Link } from "react-router-dom";
import '../../Common/css/workout.css';

const ExerciseModule = () => {
  const [exercises, setExercises] = useState([]);
  var check = authenticationCheck();

  // call getAllExercises from service 
  useEffect(() => {
    if(check) {
      getAllExercises().then((exercises) => {
        setExercises(exercises);
      });
    }
  }, [check]);

  if(check) {
    return (
      <div>
        <Menubar />
        <ExerciseTable exercises={exercises}/>
      </div>
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

export default ExerciseModule;
