// displays all exercises currently in database
const ExerciseTable = ({ exercises }) => {
    return (
      <div>
          <h1 class="header">My exercises</h1>
          <p class="filter">
          <img src="../../Common/images/Filter-Icon.png" class="filter" /> Filter
          </p>
          <table id="exercises">
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