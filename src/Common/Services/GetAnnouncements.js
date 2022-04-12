import Parse from "parse";

export const getAllAnnouncements = (objectId) => {
  const Announcement = Parse.Object.extend("Announcement");
    const query = new Parse.Query(Announcement);
    return query.find().then((results) => {
    return results;
  });
};

export const deleteAnnouncement = (objectId) => {
  const Announcement = Parse.Object.extend("Announcement");
  const query = new Parse.Query(Announcement);
  return query.get(objectId).then((announcement) => {
    announcement.destroy();
  })
  .catch((error) => {
    alert(`Error: ${error.message}`);
  });
};