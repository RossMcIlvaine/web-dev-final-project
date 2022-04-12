export const filterWorkouts = (workouts, filter) => {
    var filteredWorkouts = [];
    workouts.map((workout) => {
        if(workout.get("muscleGroup") === filter) {
            filteredWorkouts.push(workout);
        }
    })

    return filteredWorkouts;
};

export const filterExercises = (exercises, filter) => {
    var filteredExercises = [];
    exercises.map((exercise) => {
        if(exercise.get("muscleGroup") === filter) {
            filteredExercises.push(exercise);
        }
    })

    return filteredExercises;
};