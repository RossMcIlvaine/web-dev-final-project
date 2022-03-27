import React, { useEffect, useState } from "react";
import getAllWorkouts from "../../Common/Services/GetWorkout";
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
      <p>Hi</p>
      <WorkoutTable workouts={workouts}/>
      <WorkoutForm/>
    </div>
  );
};

export default WorkoutModule;
