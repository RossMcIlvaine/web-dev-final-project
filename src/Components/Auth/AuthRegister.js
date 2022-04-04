import React, { useEffect, useState } from "react";
import { authenticationCheck, createUser } from "../../Common/Services/AuthService";
import { Redirect } from "react-router-dom";
import AuthForm from "./AuthForm";
import '../../Common/css/register.css';

const AuthRegister = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  // flag to render register vs login form
  const [registering, setRegistering] = useState(true);

  var check = authenticationCheck();

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (newUser && add) {
      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(
            `${userCreated.get("firstName")}, you successfully registered!`
          );
        }
        setAdd(false);
      });
    }
  }, [newUser, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewUser({
      ...newUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
  };

  if(!check) {
    return (
      <div>
        <AuthForm
          user={newUser}
          reg={registering}
          onChange={onChangeHandler}
          onSubmit={onSubmitHandler}
        />
      </div>
    );
  }
  else {
    return(
      <div>
        {/* send users to home if already signed in */}
        <Redirect to="/User/home"/>
      </div>
    );
  }
};

export default AuthRegister;