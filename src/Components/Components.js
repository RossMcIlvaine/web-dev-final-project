import React from "react";
import Login from "./Login/Login.js";
import Register from "./Register/Register.js";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import WorkoutModule from "./Workout/Main.js";


const Components = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <WorkoutModule />
    </div>
  );
};

export default Components;