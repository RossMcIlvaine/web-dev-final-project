import React, { useEffect, useState } from "react";
import getAllExercises from "../../Common/Services/GetExercise";
import ExerciseTable from "./ExerciseTable";

const ExerciseModule = () => {
  const [exercises, setExercises] = useState([]);

  // call getAllExercises from service 
  useEffect(() => {
    getAllExercises().then((exercises) => {
      // console.log(exercises);
      setExercises(exercises);
    });
  }, []);
  return (
    <div>
      <ExerciseTable exercises={exercises}/>
    </div>
  );
};

export default ExerciseModule;
