import React, { useEffect, useState } from "react";
import getAllWorkouts from "../../Common/Services/GetWorkout";
import Menubar from "../Menubar/Menubar";
import WorkoutTable from "./WorkoutTable";
import WorkoutForm from "./WorkoutForm";
import '../../Common/css/workout.css';

const WorkoutModule = () => {
  const [workouts, setWorkouts] = useState([]);

  // call getAllWorkouts from service 
  useEffect(() => {
    getAllWorkouts().then((workouts) => {
      // console.log(workouts);
      setWorkouts(workouts);
    });
  }, []);
  return (
    <div>
      <Menubar/>
      <WorkoutTable workouts={workouts}/>
      <WorkoutForm/>
    </div>
  );
};

export default WorkoutModule;
