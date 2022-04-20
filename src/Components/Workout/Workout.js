import React, { useEffect, useState } from "react";
import { addWorkout, getAllWorkouts, getUserWorkouts } from "../../Common/Services/WorkoutService";
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
      getUserWorkouts().then((userWorkouts) => {
        setUserWorkouts(userWorkouts);
      });
    }
  }, [check]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    const data = new FormData(e.target);
    addWorkout(data);
  };

  if(check) {
    return (
      <div>
        <Menubar/>
        <WorkoutTable workouts={userWorkouts}/>
        <WorkoutForm onSubmit={onSubmitHandler}/>
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
