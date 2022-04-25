import Parse from "parse";

export const getAllWorkouts = () => {
    const Workout = Parse.Object.extend("Workout");
    const query = new Parse.Query(Workout);
    return query.find().then((results) => {
    return results;
  });
};

// Service to retrieve workouts specific to user
export const getUserWorkouts = () => {

  // This function grabs the workouts object from the current user

  const User = Parse.User.current();
  // Get workout relation and query
  const relation = User.relation("workouts");
  const query = relation.query();

  return query.find().then((results) => {
    return results;
  });
};

export const addWorkout = (data) => {
  // Create new workout and add values to it
  let Workout = new Parse.Object('Workout');
  Workout.set("name", data.get("workoutName"))
  Workout.set("muscleGroup", data.get("focus"));

  try {
    Workout.save().then(() => {
      const User = Parse.User.current();
      const relation = User.relation("workouts");
      relation.add(Workout);
      User.save();
      alert('Success! Workout created!');
    });
    return true;
  } catch (error) {
    alert(`Error! ${error.message}`);
    return false;
  };
}

export const printExercises = (exercises) => {
  var newString = '';
  if(exercises) {
    for(let i = 0; i < exercises.length; i++) {
      if((i+1) === exercises.length) {
        newString += exercises[i];
      }
      else {
        newString += exercises[i] + ', ';
      }
    }
  }
  else {
    newString = 'No exercises entered yet!';
  }
  return newString;
};

export const deleteWorkout = (objectId) => {
  const Workout = Parse.Object.extend("Workout");
  const query = new Parse.Query(Workout);
  return query.get(objectId).then((workout) => {
    workout.destroy();
  })
  .catch((error) => {
    alert(`Error: ${error.message}`);
  });
};