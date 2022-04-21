import React from "react";
import Login from "./Auth/AuthLogin";
import Register from "./Auth/AuthRegister";
import WorkoutModule from "./Workout/Workout";
import WorkoutAuthModule from "./Workout/WorkoutAuth";
import AuthModule from "./Auth/Auth.js";
import Home from "./Home/Home";
import HomeAuthModule from "./Home/HomeAuth";
import ProfileModule from "./Profile/Profile";
import ProfileAuthModule from "./Profile/ProfileAuth";

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
          <Route path="/:username/home" component={Home}/>
          <Route path="/:username/workouts" component={WorkoutModule} />
          <Route path="/home" component={HomeAuthModule}/>
          <Route path="/workouts" component={WorkoutAuthModule} />
          <Route path="/:username/profile" component={ProfileModule} />
          <Route path="/profile" component={ProfileAuthModule} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default Components;