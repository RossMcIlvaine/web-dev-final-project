import React, { useEffect, useState } from "react";
import getAllWorkouts from "../../Common/Services/Service";
import Child from "./Child";

const MainModule = () => {
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
      <Child workouts={workouts}/>
    </div>
  );
};

export default MainModule;
