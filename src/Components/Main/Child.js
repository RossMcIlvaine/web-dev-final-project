import React from "react";

const Child = ({workouts}) => {
    return (
        <div>
        {workouts.length > 0 && (
            <ul>
                {workouts.map((workout) => (
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
                ))}
            </ul>
            )}
        </div>
    );
}

export default Child;