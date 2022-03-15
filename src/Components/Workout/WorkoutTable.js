import { FilterOutline } from 'react-ionicons'

// displays all workouts currently in database
const WorkoutTable = ({ workouts }) => {
  return (
    <div>
        <h1 class="header">My Workouts</h1>
        <p class="filter">
        <FilterOutline /> Filter
        </p>
        <table id="workouts">
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
        </tr>

        {workouts.map(
            (workout) =>
            <tr key={workout}>
                <td>{workout.id}</td>
                <td>{workout.get("name")}</td>
                <td>{workout.get("muscleGroup")}</td>
            </tr>
        )}
        </table>
    </div>
  );
}

export default WorkoutTable;