import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menubar from "../Menubar/Menubar";
import { authenticationCheck } from "../../Common/Services/AuthService";
import NewsCard from "./NewsCard";
import AnnouncementCard from "./AnnouncementCard";
import EventCard from "./EventCard";
import { getAllAnnouncements, deleteAnnouncement } from "../../Common/Services/GetAnnouncements";
import { getAllEvents, deleteEvent } from "../../Common/Services/GetEvents";
import { deleteNewsItem, getAllNews } from "../../Common/Services/GetNews";
import { adminCheck } from "../../Common/Services/AuthService";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
   "fontFamily": `"Nunito", sans-serif`,
  }
});

const Home = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [events, setEvents] = useState([]);
    const [news, setNews] = useState([]);
    const [removeNews, setRemoveNews] = useState("");
    const [removeEvent, setRemoveEvent] = useState("");
    const [removeAnnouncement, setRemoveAnnouncement] = useState("");
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
        });
      }
    }, [check]);

    useEffect(() => {
      // get announcements, events, and news from database
      if (removeNews.length > 0) {
        const newNews = news.filter((newsitem) => newsitem.id !== removeNews);
        setNews(newNews);
  
        deleteNewsItem(removeNews).then(() => {
          console.log("Removed news item with ID: ", removeNews);
        });
        // Reset remove state variable
        setRemoveNews("");
      }
      if (removeEvent.length > 0) {
        const newEvent = events.filter((event) => event.id !== removeEvent);
        setEvents(newEvent);
  
        deleteEvent(removeEvent).then(() => {
          console.log("Removed event with ID: ", removeEvent);
        });
        // Reset remove state variable
        setRemoveEvent("");
      }
      if (removeAnnouncement.length > 0) {
        const newAnnouncement = announcements.filter((ann) => ann.id !== removeAnnouncement);
        setAnnouncements(newAnnouncement);
  
        deleteAnnouncement(removeAnnouncement).then(() => {
          console.log("Removed announcement with ID: ", removeAnnouncement);
        });
        // Reset remove state variable
        setRemoveAnnouncement("");
      }
    }, [news, announcements, events, removeNews, removeEvent, removeAnnouncement]);

    if(check) {
      return (
        <ThemeProvider theme={theme}>
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
              <AnnouncementCard announcement={announcement} setRemove={setRemoveAnnouncement} isAdmin={isAdmin}/>
          )}
          </div>
          <h2 class="section-header">Events</h2>
          <div style={{flexGrow: 1, padding: 10, display: 'flex'}}>
          {events.map(
            (event) =>
              <EventCard event={event} setRemove={setRemoveEvent} isAdmin={isAdmin}/>
          )}
          </div>
          <h2 class="section-header">News</h2>
          <div style={{flexGrow: 1, padding: 10, display: 'flex'}}>
          {news.map(
            (newsItem) =>
              <NewsCard newsItem={newsItem} setRemoveNews={setRemoveNews} isAdmin={isAdmin}/>
          )}
          </div>
        </div>
        </ThemeProvider>
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