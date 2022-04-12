import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteNewsItem } from '../../Common/Services/GetNews';

const NewsCard = ({newsItem, setRemove, isAdmin}) => {
    if(isAdmin) {
        return(
            <div style={{ marginLeft: 30 }}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={newsItem.get("imageAddress")}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {newsItem.get("title")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {newsItem.get("content")}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button target="_blank" href={newsItem.get("externalURL")} size="small">Learn More</Button>
                    <Button onClick={() => {deleteNewsItem(newsItem.id); setRemove(newsItem.id)}}>
                        <DeleteIcon />
                    </Button>
                </CardActions>
                </Card>
            </div>
        );
    }
    else {
        return (
            <div style={{ marginLeft: 30 }}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={newsItem.get("imageAddress")}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {newsItem.get("title")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {newsItem.get("content")}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button target="_blank" href={newsItem.get("externalURL")} size="small">Learn More</Button>
                </CardActions>
                </Card>
            </div>
        );
    }    
};

export default NewsCard;