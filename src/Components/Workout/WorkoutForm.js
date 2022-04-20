// Form adds new workouts to the list
// Workouts will be stored on individual account basis and be sent to server
// Future work will actually create a Workout and add it to database based on user input

const workoutForm = ({onSubmit}) => {
  return (
    <div class="wrap-collabsible">
      <input id="collapsible" class="toggle" type="checkbox" />
      <label for="collapsible" class="lbl-toggle">Add Workout</label>
      <div class="collapsible-content">
        <div class="content-inner">
        <form onSubmit={onSubmit}>
        <p class="subheader">Workout Name</p>
        <input type="text" id="workoutName" placeholder="Workout Name" class="inputText" name="workoutName"></input>
        <p class="subheader">Muscle Group</p>
        <select id="focus" name="focus">
          <option id="full" value="Full Body">Full Body</option>
          <option id="arms" value="Upper Body">Upper Body</option>
          <option id="legs" value="Lower Body">Lower Body</option>
          <option id="core" vale="Core">Core</option>
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