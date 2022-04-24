import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { printExercises } from '../../Common/Services/WorkoutService';
import { deleteWorkout } from '../../Common/Services/WorkoutService';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '4px solid #fcba03',
  boxShadow: 14,
  p: 4,
};

// displays all workouts currently in database
const WorkoutTable = ({ workouts, isAdmin, setRemove }) => {

  const [filteredWorkouts, setFilteredWorkouts] = useState(workouts);

  // filter workouts by muscle group category
  const handleFilter = e => {
    const value = e.target.value;
    if(value === 'Full Body') {
      setFilteredWorkouts(
        workouts.filter(workout => {
          if(workout.get("muscleGroup") === value) {
            return true;
          }
          return false;
        })
      )
    }
    else if(value === 'Upper Body') {
      setFilteredWorkouts(
        workouts.filter(workout => {
          if(workout.get("muscleGroup") === value) {
            return true;
          }
          return false;
        })
      )
    }
    else if(value === 'Lower Body') {
      setFilteredWorkouts(
        workouts.filter(workout => {
          if(workout.get("muscleGroup") === value) {
            return true;
          }
          return false;
        })
      )
    }
    else if(value === 'Core') {
      setFilteredWorkouts(
        workouts.filter(workout => {
          if(workout.get("muscleGroup") === value) {
            return true;
          }
          return false;
        })
      )
    }
    else {
      setFilteredWorkouts(workouts);
    }
  };

  useEffect(() => {
    setFilteredWorkouts(workouts);
  }, [workouts])

  if(isAdmin) {
    return (
      <div>
        <h1 class="header">My Workouts</h1>
        <select
            class="select"
            onChange={handleFilter}
          >
            <option value="All">All</option>
            <option value="Full Body">Full Body</option>
            <option value="Upper Body">Upper Body</option>
            <option value="Lower Body">Lower Body</option>
            <option value="Core">Core</option>
          </select>
        <table id="workouts">
          
        <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Exercises</th>
            <th>Workout Details</th>
            <th></th>
        </tr>

        {filteredWorkouts
          .map(
              (workout) =>
              <tr key={workout} style={{height: "70px"}}>
                  <td style={{width: "15%"}}>{workout.get("name")}</td>
                  <td style={{width: "15%"}}>{workout.get("muscleGroup")}</td>
                  <td>{printExercises(workout.get("exercises"))}</td>
                  <td style={{width: "10%"}}>
                    <a class="link" target="_blank" href={workout.get("image")}>View Workout</a>
                  </td>
                  <td>
                    <Button onClick={() => {deleteWorkout(workout.id); setRemove(workout.id)}}>
                        <DeleteIcon />
                    </Button>
                  </td>
              </tr>
              )}
          </table>
      </div>
    );
  }
  else {
    return (
      <div>
        <h1 class="header">My Workouts</h1>
        <select
            class="select"
            onChange={handleFilter}
          >
            <option value="All">All</option>
            <option value="Full Body">Full Body</option>
            <option value="Upper Body">Upper Body</option>
            <option value="Lower Body">Lower Body</option>
            <option value="Core">Core</option>
          </select>
        <table id="workouts">
          
        <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Exercises</th>
            <th>Workout Details</th>
        </tr>

        {filteredWorkouts
          .map(
              (workout) =>
              <tr key={workout} style={{height: "70px"}}>
                  <td style={{width: "15%"}}>{workout.get("name")}</td>
                  <td style={{width: "15%"}}>{workout.get("muscleGroup")}</td>
                  <td>{printExercises(workout.get("exercises"))}</td>
                  <td style={{width: "10%"}}>
                    <a class="link" target="_blank" href={workout.get("image")}>View Workout</a>
                  </td>
              </tr>
              )}
          </table>
      </div>
    );
  }
}

export default WorkoutTable;