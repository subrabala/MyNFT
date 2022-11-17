import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function cardComp() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="assets/Rectangle 2.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Monkemoney18
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>AP21110010678
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }