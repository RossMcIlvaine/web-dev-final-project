import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menubar from "../Menubar/Menubar";
import { authenticationCheck } from "../../Common/Services/AuthService";
import NewsCard from "./NewsCard";
import AnnouncementCard from "./AnnouncementCard";
import EventCard from "./EventCard";
import getAllAnnouncements from "../../Common/Services/GetAnnouncements";
import getAllEvents from "../../Common/Services/GetEvents";

const Home = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [events, setEvents] = useState([]);
    var check = authenticationCheck();

    useEffect(() => {
      // get announcements, events, and news from database
      if(check) {
        getAllAnnouncements().then((announcements) => {
          setAnnouncements(announcements);
        });
        getAllEvents().then((events) => {
          setEvents(events);
        });
      }
      console.log(announcements);
    }, [check]);

    if(check) {
      return (
        <div>
          <Menubar />
          <h1 class="header">Welcome to Notre Dame Boxing</h1>
          <hr />
          <h2 class="section-header">Announcements</h2>
          {announcements.map(
            (announcement) =>
            <div style={{ padding: 10, display: 'flex'}}>
              <AnnouncementCard announcement={announcement} />
            </div>
            )}
          <h2 class="section-header">Events</h2>
          {events.map(
            (event) =>
            <div style={{flexGrow: 1, padding: 10, display: 'flex'}}>
              <EventCard event={event} />
            </div>
          )}
          <h2 class="section-header">News</h2>
          <NewsCard />
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