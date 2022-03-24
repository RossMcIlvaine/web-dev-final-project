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
  const user = new Parse.User();
  let username = existingUser.username;
  let password = existingUser.password;

  return user
    .logIn(username, password)
    .then((userLoggedIn) => {
      return userLoggedIn;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};