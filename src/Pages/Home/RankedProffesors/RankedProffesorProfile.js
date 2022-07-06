import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const RankedProffesorProfile = ({staff}) => {
    return (
        <div>
          
           <Card  style={{padding:'10px' ,margin:'10px', height:"350px" ,width:''}}  sx={{ boxShadow: 3 }}  >
      <CardActionArea>
       <img src={`data:image/png;base64,${staff.image}`} alt=""  style={{width:"200px" , height:'180px'}}/>
        <CardContent>
          <Typography gutterBottom variant="h6" style={{marginBottom:'-5px'}}  component="div">
          {staff.name}
          </Typography>
          <Typography variant="h6" style={{marginBottom:'10px'}} color="text.secondary">
          {staff.designation}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {staff.speech.slice(0, 60)+'...'} <Link style={{textDecoration:'none' }} to={`/speech/${staff._id}`}><Button variant="contained" size="small" style={{backgroundColor:'red'}} >Read More</Button></Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
   
        </div>
       
    );
};

export default RankedProffesorProfile;