import React, { useEffect, useState } from "react";
import getAllWorkouts from "../../Common/Services/Service";
import WorkoutTable from "./WorkoutTable";
import WorkoutForm from "./WorkoutForm";

const WorkoutModule = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    getAllWorkouts().then((workouts) => {
      console.log(workouts);
      setWorkouts(workouts);
    });
  }, []);
  return (
    <div>
      <p>This is the main module</p>
      <WorkoutTable workouts={workouts}/>
      <WorkoutForm/>
    </div>
  );
};

export default WorkoutModule;
