// displays all workouts currently in database
const WorkoutTable = ({ workouts }) => {
  return (
    <div>
        <h1 class="header">My Workouts</h1>
        <p class="filter">
        <img src="images/Filter-Icon.png" class="filter" /> Filter
        </p>
        <table id="workouts">
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
        </tr>

        {/* Add workout module */}
        ${workouts.map(
            (workout) =>
                <div>
                        <span>
                        {/* Using getter for workout Object to display name */}
                        <li key={workout.id}>{workout.get("name")} | {workout.get("muscleGroup")}</li>
                            <ul>
                                {workout.get("exercises").map((exercise) => (
                                    <li>{exercise}</li>
                                ))}
                            </ul>
                        </span>
                    </div>
                // // Below is original version from Feature 3
                // <tr key="${workout}">
                //     <td>${workout.id}</td>
                //     <td>${workout.name}</td>
                //     <td>${workout.category}</td>
                // </tr>
        )}
        </table>
    </div>
  );
}

export default WorkoutTable;