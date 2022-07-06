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
import { Link } from 'react-router-dom';
import '../Courses/Courses.css'


const CourseCard = ({courses}) => {
    const{duration,image ,courseName ,_id ,requirements} = courses
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
         image={`data:image/png;base64,${image}`}
         alt={image}
        
      />
      
      <CardContent  className='content'>
      {faces.map(face => (
          <Avatar className='avatar' key={face} src={face} />
        ))}
       <div style={{textAlign:'left'}}>
       <Typography
          className={"MuiTypography--heading"}
          variant={"h6"} display={"inline-block"}
          paddingBottom={"55px"}
        >
           
    {courseName}
        </Typography>
        <Typography
          className={"MuiTypography--subheading"}
          variant={"caption"}
        >
          Duration: {duration}
        </Typography>
        <br/>
        <Typography
          className={"MuiTypography--subheading"}
          variant={"caption"}
        >
          Requirements: {requirements}
        </Typography>

       
       </div>
       <Link style={{textDecoration:'none'}} to={`/important/${_id}`}><Button variant="contained" size="small" style={{backgroundColor:'red'}} >Learn More</Button></Link>
       
        
      </CardContent>
    </Card>
    );
};

export default CourseCard;