import React, { useEffect, useState } from "react";
import { getAllWorkouts, getUserWorkouts } from "../../Common/Services/GetWorkout";
import Menubar from "../Menubar/Menubar";
import WorkoutTable from "./WorkoutTable";
import WorkoutForm from "./WorkoutForm";
import { authenticationCheck } from "../../Common/Services/AuthService";
import { Link } from "react-router-dom";
import '../../Common/css/workout.css';

const WorkoutModule = () => {
  const [workouts, setWorkouts] = useState([]);
  const [userWorkouts, setUserWorkouts] = useState([]);

  var check = authenticationCheck();

  // call getAllWorkouts from service 
  useEffect(() => {
    if(check) {
      getAllWorkouts().then((workouts) => {
        setWorkouts(workouts);
      });
    }
  }, [check]);

  useEffect(() => {
    if(check) {
      // setUserWorkouts(getUserWorkouts());
      // console.log(userWorkouts);

      getUserWorkouts().then((userWorkouts) => {
        setUserWorkouts(userWorkouts);
      });
    }
  }, [check]);

  if(check) {
    return (
      <div>
        <Menubar/>
        <WorkoutTable workouts={workouts} />
        <WorkoutForm/>
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

export default WorkoutModule;
