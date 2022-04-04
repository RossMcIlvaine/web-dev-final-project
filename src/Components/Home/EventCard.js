import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EventIcon from '@mui/icons-material/Event';
  
  const EventCard = ({event}) => {

    return (
        <div style={{ marginLeft: 30 }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <EventIcon />
                    <Typography gutterBottom variant="h5" component="div">
                        {event.get("title")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {event.get("date").toDateString()}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );    
  };

export default EventCard;