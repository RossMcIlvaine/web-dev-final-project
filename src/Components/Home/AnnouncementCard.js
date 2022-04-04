import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
  
  const AnnouncementCard = ({announcement}) => {

    return (
        <div style={{ marginLeft: 30 }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {announcement.get("title")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {announcement.get("content")}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );    
  };

export default AnnouncementCard;