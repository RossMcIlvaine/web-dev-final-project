import Parse from "parse";

export default function getAllAnnouncements() {
    const Announcement = Parse.Object.extend("Announcement");
    const query = new Parse.Query(Announcement);
    return query.find().then((results) => {
      console.log(results);
    return results;
  });
};