// Form adds new workouts to the list
// Workouts will be stored on individual account basis and be sent to server
const workoutForm = () => {
  return (
    <div class="wrap-collabsible">
      <input id="collapsible" class="toggle" type="checkbox" />
      <label for="collapsible" class="lbl-toggle">Add Workout</label>
      <div class="collapsible-content">
        <div class="content-inner">
        <form>
        <p class="subheader">Workout Name</p>
        <input type="text" placeholder="Workout Name" class="inputText"></input>
        <p class="subheader">Muscle Group</p>
        <select id="focus">
          <option id="full">Full Body</option>
          <option id="arms">Upper Body</option>
          <option id="legs">Lower Body</option>
          <option id="core">Core</option>
        </select>
        <p class="subheader">Units</p>
        <div>
          <input type="radio" id="seconds" name="units" value="seconds"/>
          <label class="subtext" for="seconds"> Seconds</label>
          <br />
          <input type="radio" id="reps" name="units" value="reps"/>
          <label class="subtext" for="reps"> Reps</label>
        </div>
        <p class="subheader">Exercises:</p>
        <input class="inputText" type="text" placeholder="Excercise"></input>
        <br/>
        <br/>
        <button class="button">Add Excercise</button>
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