import Filter from "../Filter/Filter";

// displays all exercises currently in database
// Future work will allow users to create and add exercises to the database
const ExerciseTable = ({ exercises }) => {
    return (
      <div>
          <h1 class="header">My Exercises</h1>
          <p class="filter">
            <Filter />
          </p>
          <table id="workouts">
          <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
          </tr>
  
          {exercises.map(
              (exercise) =>
              <tr key={exercise}>
                  <td>{exercise.id}</td>
                  <td>{exercise.get("name")}</td>
                  <td>{exercise.get("muscleGroup")}</td>
              </tr>
          )}
          </table>
      </div>
    );
  }

export default ExerciseTable;