import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menubar from "../Menubar/Menubar";
import { authenticationCheck } from "../../Common/Services/AuthService";
import NewsCard from "./NewsCard";
import AnnouncementCard from "./AnnouncementCard";
import EventCard from "./EventCard";
import getAllAnnouncements from "../../Common/Services/GetAnnouncements";
import getAllEvents from "../../Common/Services/GetEvents";
import { deleteNewsItem, getAllNews } from "../../Common/Services/GetNews";
import { createTheme } from "@mui/material";
import { adminCheck } from "../../Common/Services/AuthService";

const THEME = createTheme({
  typography: {
   "fontFamily": `"Nunito", sans-serif`,
  }
});

const Home = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [events, setEvents] = useState([]);
    const [news, setNews] = useState([]);
    const [add, setAdd] = useState(false);
    const [remove, setRemove] = useState("");
    var check = authenticationCheck();
    var isAdmin = adminCheck();
    
    useEffect(() => {
      // get announcements, events, and news from database
      if(check) {
        getAllAnnouncements().then((announcements) => {
          setAnnouncements(announcements);
        });
        getAllEvents().then((events) => {
          setEvents(events);
        });
        getAllNews().then((news) => {
          setNews(news);
        })
      }
    }, [check]);

    useEffect(() => {
      // get announcements, events, and news from database
      if (remove.length > 0) {
        //Filter the old lessons list to take out selected lesson
        const newNews = news.filter((newsitem) => newsitem.id !== remove);
        setNews(newNews);
  
        deleteNewsItem(remove).then(() => {
          console.log("Removed news item with ID: ", remove);
        });
        // Reset remove state variable
        setRemove("");
      }
    }, [news, remove]);

    if(check) {
      return (
        <div>
          <Menubar />
          <h1 class="header">Welcome to Notre Dame Boxing</h1>
          <hr />
          <br />
          <img class="homePhoto" src="https://recsports.nd.edu/assets/238234/fullsize/boxingclubpage_image.jpg" alt="notre dame boxing" />
          <h2 class="section-header">Announcements</h2>
          <div style={{ flexGrow: 1, padding: 10, display: 'flex'}}>
          {announcements.map(
            (announcement) =>
              <AnnouncementCard announcement={announcement} />
          )}
          </div>
          <h2 class="section-header">Events</h2>
          <div style={{flexGrow: 1, padding: 10, display: 'flex'}}>
          {events.map(
            (event) =>
              <EventCard event={event} />
          )}
          </div>
          <h2 class="section-header">News</h2>
          <div style={{flexGrow: 1, padding: 10, display: 'flex'}}>
          {news.map(
            (newsItem) =>
              <NewsCard newsItem={newsItem} setRemove={setRemove} isAdmin={isAdmin}/>
          )}
          </div>
        </div>
      );
    }
    else {
      return(
        <div>
          {/* Two buttons to send users to login or register if they reach this */}
          <p>You shouldn't be here! <Link to="/login">Log In</Link> or <Link to="/register">Register</Link> to view your page.</p>
        </div>
      );
    }
};

export default Home;