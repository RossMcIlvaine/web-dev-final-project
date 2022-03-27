import React from "react";
import AuthLogin from "./Auth/AuthLogin.js";
import AuthRegister from "./Auth/AuthRegister.js";
import ExerciseModule from "./Exercise/Exercise.js";
import WorkoutModule from "./Workout/Workout.js";
import Menubar from "./Menubar/Menubar.js";
import AuthModule from "./Auth/Auth.js";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const Components = () => {
  return (
    <div>
      <Router>
        <Switch>
          {/* Routing added here, will be expanded with future components */}
          {/* New tabs must also be added with new routing */}
          <Route path="/" exact component={AuthModule} />
          <Route path="/exercises" component={ExerciseModule} />
          <Route path="/login" component={AuthLogin} />
          <Route path="/register" component={AuthRegister} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default Components;