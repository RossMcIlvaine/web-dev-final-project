import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
const WorkoutTable = ({ workouts }) => {

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
        </tr>

        {filteredWorkouts
        .map(
            (workout) =>
            <tr key={workout}>
                <td>{workout.get("name")}</td>
                <td>{workout.get("muscleGroup")}</td>
                <td>{workout.get("exercises")}</td>
                {/*}
                <Button onClick={handleOpen}><td>View Workout</td></Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                      {workout.get("name")}
                    </Typography>
                    <Typography id="modal-modal-title" variant="subtitle1" component="h2">
                      {workout.get("muscleGroup")}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      {workout.get("ex")}
                    </Typography>
                  </Box>
        </Modal>*/}
            </tr>
            )}
        </table>
    </div>
  );
}

export default WorkoutTable;