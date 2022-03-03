import Parse from "parse";

export default function getAllExercises() {
    const Exercise = Parse.Object.extend("Exercise");
    const query = new Parse.Query(Exercise);
    return query.find().then((results) => {
    return results;
  });
};