import React from "react";
import { Redirect, useHistory } from "react-router-dom";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ component: Component, flag, ...rest }) => {
  const history = useHistory();
  const registerHandler = () => {
    history.push("/register");
  };
  const loginHandler = () => {
    history.push("/login");
  };
  console.log(rest); // show rest.path in the console
  // you could redirect back to /auth if the flag is not true
  return (
    <div>
      {flag ? (
        <Redirect to={rest.path} />
      ) : (
        <div>
          <p>You shouldn't be here! <a onClick={loginHandler}>Log In</a> or <a onClick={registerHandler}>Register</a> to view your page.</p>
        </div>
      )}
    </div>
  );
};

export default ProtectedRoute;