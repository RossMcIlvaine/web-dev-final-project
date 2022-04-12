import React, { useEffect, useState } from "react";
import getAllWorkouts from "../../Common/Services/GetWorkout";
import Menubar from "../Menubar/Menubar";
import WorkoutTable from "./WorkoutTable";
import WorkoutForm from "./WorkoutForm";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { authenticationCheck } from "../../Common/Services/AuthService";
import { Link } from "react-router-dom";
import '../../Common/css/workout.css';

const WorkoutModule = () => {
  const [workouts, setWorkouts] = useState([]);
  const [filterOn, setFilterOn] = useState(false);
  const [category, setCategory] = useState('');

  var check = authenticationCheck();

  const handleChange = (event) => {
    setCategory(event.target.value);
    setFilterOn(true);
  };

  // call getAllWorkouts from service 
  useEffect(() => {
    if(check) {
      getAllWorkouts().then((workouts) => {
        setWorkouts(workouts);
      });
    }
  }, [check]);

  if(check) {
    return (
      <div>
        <Menubar/>
        {/*
        <p class="filter">
        <Box sx={{ minWidth: 120 }}>
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Filter"
              onChange={handleChange}
            >
              <MenuItem value={10}>Full Body</MenuItem>
              <MenuItem value={20}>Upper Body</MenuItem>
              <MenuItem value={30}>Lower Body</MenuItem>
              <MenuItem value={40}>Core</MenuItem>
            </Select>
          </FormControl>
        </Box>
    </p>*/}
        <WorkoutTable workouts={workouts}/>
        <WorkoutForm/>
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
