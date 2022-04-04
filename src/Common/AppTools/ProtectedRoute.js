import React from "react";
import { Link, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, flag, ...rest }) => {

  console.log(rest); // show rest.path in the console

  return (
    <div>
      {flag ? (
        <Redirect to={rest.path} />
      ) : (
        <div>
          {/* Two buttons to send users to login or register if they reach this */}
          <p>You shouldn't be here! <Link to="/login">Log In</Link> or <Link to="/register">Register</Link> to view your page.</p>
        </div>
      )}
    </div>
  );
};

export default ProtectedRoute;