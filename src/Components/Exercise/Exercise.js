import React, { useEffect, useState } from "react";
import getAllExercises from "../../Common/Services/GetExercise";
import Menubar from "../Menubar/Menubar";
import ExerciseTable from "./ExerciseTable";
import '../../Common/css/workout.css';

const ExerciseModule = () => {
  const [exercises, setExercises] = useState([]);

  // call getAllExercises from service 
  useEffect(() => {
    getAllExercises().then((exercises) => {
      setExercises(exercises);
    });
  }, []);
  return (
    <div>
      <Menubar />
      <ExerciseTable exercises={exercises}/>
    </div>
  );
};

export default ExerciseModule;
