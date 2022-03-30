import React from "react";
import Login from "./Auth/AuthLogin";
import Register from "./Auth/AuthRegister";
import ExerciseModule from "./Exercise/Exercise";
import ExerciseAuthModule from "./Exercise/ExerciseAuth";
import WorkoutModule from "./Workout/Workout";
import WorkoutAuthModule from "./Workout/WorkoutAuth";
import ProtectedRoute from "../Common/AppTools/ProtectedRoute";
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
          {/* These routes are used after authentication, sends user to their personal app display */}
          <Route path="/:username/workouts" component={WorkoutModule} />
          <Route path="/:username/exercises" component={ExerciseModule} />
          <Route path="/workouts" component={WorkoutAuthModule} />
          <Route path="/exercises" component={ExerciseAuthModule} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default Components;