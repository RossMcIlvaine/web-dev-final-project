import Parse from "parse";

export default function getAllEvents() {
    const Event = Parse.Object.extend("Event");
    const query = new Parse.Query(Event);
    return query.find().then((results) => {
    return results;
  });
};