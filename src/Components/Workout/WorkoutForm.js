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
        <p class="subheader">Workout Name*</p>
        <input type="text" id="workoutName" placeholder="Workout Name" class="inputText" name="workoutName"></input>
        <p class="subheader">Muscle Group*</p>
        <select id="focus" name="focus">
          <option id="full" value="Full Body">Full Body</option>
          <option id="arms" value="Upper Body">Upper Body</option>
          <option id="legs" value="Lower Body">Lower Body</option>
          <option id="core" vale="Core">Core</option>
        </select>
        <div class="inline">
          <p class="subheader">Exercises: Enter as comma separated list</p>
          <input class="inputText" type="text" placeholder="Excercise" name="exercise"></input>
          {/* Button would add new inputs so the user doesn't have to enter exercises as a list themselves
            <button class="button">Add Excercise</button> */}
        </div>
        <p class="subheader">Link to Full Workout</p>
        <input type="text" id="workoutLink" placeholder="Link" class="inputText" name="workoutLink"></input>
        <br/>
        <br/>
        <button class="button" type="submit">Add Workout</button>
        <p class="required">* indicates required field</p>
      </form>
        </div>
      </div>
    </div>
  );
}

export default workoutForm;