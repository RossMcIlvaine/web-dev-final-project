import Parse from "parse";

export const getAllEvents = () => {
  const Event = Parse.Object.extend("Event");
    const query = new Parse.Query(Event);
    return query.find().then((results) => {
    return results;
  });
};

export const deleteEvent = (objectId) => {
  const Event = Parse.Object.extend("Event");
  const query = new Parse.Query(Event);
  return query.get(objectId).then((event) => {
    event.destroy();
  })
  .catch((error) => {
    alert(`Error: ${error.message}`);
  });
};