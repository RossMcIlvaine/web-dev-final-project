import React, { useEffect, useState } from "react";
import { loginUser } from "../../Common/Services/AuthService";
import { useHistory } from "react-router-dom";
import AuthForm from "./AuthForm";
import '../../Common/css/login.css';

const AuthLogin = () => {
  const [existingUser, setExistingUser] = useState({
    username: "",
    password: ""
  });

  const history = useHistory();

  // Continue button sends users to workout tab after logging in
  const buttonHandler = () => {
    history.push("/workouts");
  };

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  // flag to render register vs login form
  const [registering, setRegistering] = useState(false);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (add) {
      loginUser(existingUser).then((userLoggedIn) => {
        if (userLoggedIn) {
          alert(`${userLoggedIn.get("username")}, you successfully logged in!`);
        }
        setAdd(false);
      });
    }
  }, [existingUser, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log("new value is: ", newValue);

    setExistingUser({
      ...existingUser,
      [name]: newValue
    });
    console.log("existingUser: ", existingUser);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
  };

  return (
    <div>
      <AuthForm
        user={existingUser}
        reg={registering}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
      <br />
      <button className="loginButton" onClick={buttonHandler}>Continue</button>
    </div>
  );
};

export default AuthLogin;