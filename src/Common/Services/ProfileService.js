import Parse from "parse";

export const editUser = (data) => {
  // Create new workout and add values to it
  let User = Parse.User.current();
  User.set("firstName", data.get("firstName"));
  User.set("lastName", data.get("lastName"));
  User.set("username,", data.get("username"));
  User.set("email", data.get("email"));

  try {
    User.save().then(() => {
      alert('Success! Saved changes!');
    });
    return true;
  } catch (error) {
    alert(`Error! ${error.message}`);
    return false;
  };
}