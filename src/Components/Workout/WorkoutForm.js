// Form adds new workouts to the list
// Workouts will be stored on individual account basis and be sent to server
// Future work will actually create a Workout and add it to database based on user input

const workoutForm = () => {
  return (
    <div class="wrap-collabsible">
      <input id="collapsible" class="toggle" type="checkbox" />
      <label for="collapsible" class="lbl-toggle">Add Workout</label>
      <div class="collapsible-content">
        <div class="content-inner">
        <form>
        <p class="subheader">Workout Name</p>
        <input type="text" id="workoutName" placeholder="Workout Name" class="inputText"></input>
        <p class="subheader">Muscle Group</p>
        <select id="focus">
          <option id="full">Full Body</option>
          <option id="arms">Upper Body</option>
          <option id="legs">Lower Body</option>
          <option id="core">Core</option>
        </select>
        <div class="inline">
          <p class="subheader">Exercises:</p>
          <input class="inputText" type="text" placeholder="Excercise"></input>
          <button class="button">Add Excercise</button>
        </div>
        <br/>
        <br/>
        <button class="button" type="submit">Add Workout</button>
      </form>
        </div>
      </div>
    </div>
  );
}

export default workoutForm;