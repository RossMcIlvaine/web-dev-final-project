import React, { useState, useEffect } from 'react';

// displays all exercises currently in database
// Future work will allow users to create and add exercises to the database
const ExerciseTable = ({ exercises }) => {

  const [filteredExercises, setFilteredExercises] = useState(exercises);

  // filter exercises by muscle group category
  const handleFilter = e => {
    const value = e.target.value;
    if(value === 'Full Body') {
      setFilteredExercises(
        exercises.filter(exercise => {
          if(exercise.get("muscleGroup") === value) {
            return true;
          }
          return false;
        })
      )
    }
    else if(value === 'Upper Body') {
      setFilteredExercises(
        exercises.filter(exercise => {
          if(exercise.get("muscleGroup") === value) {
            return true;
          }
          return false;
        })
      )
    }
    else if(value === 'Lower Body') {
      setFilteredExercises(
        exercises.filter(exercise => {
          if(exercise.get("muscleGroup") === value) {
            return true;
          }
          return false;
        })
      )
    }
    else if(value === 'Core') {
      setFilteredExercises(
        exercises.filter(exercise => {
          if(exercise.get("muscleGroup") === value) {
            return true;
          }
          return false;
        })
      )
    }
    else {
      setFilteredExercises(exercises);
    }
  };

  useEffect(() => {
    setFilteredExercises(exercises);
  }, [exercises])

    return (
      <div>
          <h1 class="header">My Exercises</h1>
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
          </tr>
  
          {filteredExercises.map(
              (exercise) =>
              <tr key={exercise}>
                  <td>{exercise.get("name")}</td>
                  <td>{exercise.get("muscleGroup")}</td>
              </tr>
          )}
          </table>
      </div>
    );
  }

export default ExerciseTable;