import { Button } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import '../Courses/Courses.css'


const CourseCard = ({courses}) => {
    const{duration,image ,coursename} = courses
    // const url = `/appointed/${id}`
    
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {coursename}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque est cupiditate aperiam eveniet amet asperiores, voluptates dolorem, iure ut rem culpa sed maiores sequi obcaecati dignissimos aut. Nihil, eius velit!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
};

export default CourseCard;