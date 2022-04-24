import React, { useEffect, useState } from "react";
import { addWorkout, deleteWorkout, getAllWorkouts, getUserWorkouts } from "../../Common/Services/WorkoutService";
import Menubar from "../Menubar/Menubar";
import WorkoutTable from "./WorkoutTable";
import WorkoutForm from "./WorkoutForm";
import { authenticationCheck } from "../../Common/Services/AuthService";
import { Link } from "react-router-dom";
import { adminCheck } from "../../Common/Services/AuthService";
import '../../Common/css/workout.css';

const WorkoutModule = () => {
  const [workouts, setWorkouts] = useState([]);
  const [removeWorkout, setRemoveWorkout] = useState("");
  const [userWorkouts, setUserWorkouts] = useState([]);

  var check = authenticationCheck();
  var isAdmin = adminCheck();

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

  useEffect(() => {
    if (removeWorkout.length > 0) {
      //Filter the old lessons list to take out selected lesson
      const newWorkouts = userWorkouts.filter((workout) => workout.id !== removeWorkout);
      setUserWorkouts(newWorkouts);

      deleteWorkout(removeWorkout).then(() => {
        console.log("Removed workout with ID: ", removeWorkout);
      });
      // Reset remove state variable
      setRemoveWorkout("");
    }
  }, [userWorkouts, removeWorkout]);

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
        <WorkoutTable workouts={userWorkouts} isAdmin={isAdmin} setRemove={setRemoveWorkout}/>
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
