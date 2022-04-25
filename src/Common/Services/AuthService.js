import Parse from "parse";

// used in auth register component
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.username);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  console.log("User: ", user);

  // Create a new email account when user is created (used for email service)
  let EmailAcc = new Parse.Object('Email');
  EmailAcc.set("email", newUser.email);
  EmailAcc.set("firstName", newUser.firstName);
  EmailAcc.set("lastName", newUser.lastName);
  EmailAcc.save();

  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

export const loginUser = (existingUser) => {
  let username = existingUser.username;
  let password = existingUser.password;

  console.log("User: ", existingUser);
  return Parse.User
    .logIn(username, password)
    .then((userLoggedIn) => {
      return userLoggedIn;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

export const logoutUser = (history) => {
  return Parse.User.logOut().then(() => {
    console.log('user logged out successfully');
  })
  .then(() => {
    history.push("/");
  })
  .catch((error) => {
    alert(`Error: ${error.message}`);
  });
};

export const authenticationCheck = () => {
  var check = false;
  if (Parse.User.current() != null) {
    check = Parse.User.current().authenticated();
  }

  return check;
};

export const adminCheck = () => {
  var isAdmin = Parse.User.current().get("isAdmin");

  return isAdmin;
};