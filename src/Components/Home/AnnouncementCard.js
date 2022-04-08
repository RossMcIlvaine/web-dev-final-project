import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { deleteAnnouncement } from '../../Common/Services/GetAnnouncements';
  
  const AnnouncementCard = ({announcement, setRemove, isAdmin}) => {

    if(isAdmin) {
      return(
        <div style={{ marginLeft: 30 }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {announcement.get("title")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {announcement.get("content")}
                    </Typography>
                    <CardActions>
                      <Button onClick={() => {deleteAnnouncement(announcement.id); setRemove(announcement.id)}}>
                          <DeleteIcon />
                      </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
      );
    }
    else {
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
    }    
  };

export default AnnouncementCard;