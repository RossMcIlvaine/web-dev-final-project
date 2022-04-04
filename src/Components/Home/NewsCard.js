import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NewsCard = () => {
    return (
        <div style={{ marginLeft: 30 }}>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="/src/Common/images/Boxing-Tournament.png"
                alt="boxing tournament"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                92nd Annual Bengal Bouts
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Family and friends, 2022 marks the 92nd year of the University Boxing Championships - the Bengal Bouts - at Notre Dame.
                </Typography>
            </CardContent>
            <CardActions>
                <Button target="_blank" href="https://bengalbouts.nd.edu/tournament-information/" size="small">Learn More</Button>
            </CardActions>
            </Card>
        </div>
    );    
};

export default NewsCard;