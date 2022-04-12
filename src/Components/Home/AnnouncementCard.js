import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { deleteAnnouncement } from '../../Common/Services/GetAnnouncements';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
   "fontFamily": `"Nunito", sans-serif`,
  }
});
  
  const AnnouncementCard = ({announcement, setRemove, isAdmin}) => {

    if(isAdmin) {
      return(
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      );
    }
    else {
      return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      );
    }    
  };

export default AnnouncementCard;