import { Button } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import '../Courses/Courses.css'


const CourseCard = ({courses}) => {
    const{duration,image ,coursename} = courses
    // const url = `/appointed/${id}`

    const faces = [
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Bangladesh_Red_Crescent_Society_Logo.png",
    ];
    const CARD_PROPERTY = {
      borderRadius: 4,
      boxShadow: 10,
    
    };
    
    return (
      <Card sx={CARD_PROPERTY}>
      <CardMedia
         component="img"
         height="auto"
         style={{padding:"30px" , height:'220px'}}
         image={`${image}`}
         alt={image}
        
      />
      
      <CardContent className='content'>
      {faces.map(face => (
          <Avatar className='avatar' key={face} src={face} />
        ))}
        <Typography
          className={"MuiTypography--heading"}
          variant={"h6"} display={"inline-block"}
          paddingBottom={"55px"}
        >
           
    Requirements
        </Typography>
        <Typography
          className={"MuiTypography--subheading"}
          variant={"caption"}
        >
          Post Your requirements and hire genuine people
        </Typography>
        <Divider className='divider' light />
        
      </CardContent>
    </Card>
    );
};

export default CourseCard;