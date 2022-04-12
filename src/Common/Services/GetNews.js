import Parse from "parse";

export const getAllNews = () => {
  const NewsItem = Parse.Object.extend("News");
    const query = new Parse.Query(NewsItem);
    return query.find().then((results) => {
    return results;
  });
};

export const deleteNewsItem = (objectId) => {
  const NewsItem = Parse.Object.extend("News");
  const query = new Parse.Query(NewsItem);
  return query.get(objectId).then((newsitem) => {
    newsitem.destroy();
  })
  .catch((error) => {
    alert(`Error: ${error.message}`);
  });
};