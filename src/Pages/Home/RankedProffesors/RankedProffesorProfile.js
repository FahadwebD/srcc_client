import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const RankedProffesorProfile = ({staff}) => {
    return (
        <div>
          <Link style={{textDecoration:'none'}} to={`/speech/${staff._id}`}>
           <Card  style={{padding:'10px' ,margin:'10px', height:"290px" ,width:''}}  sx={{ boxShadow: 3 }}  >
      <CardActionArea>
       <img src={`data:image/png;base64,${staff.image}`} alt=""  style={{width:"200px" , height:'180px'}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {staff.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {staff.designation}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </Link>
        </div>
       
    );
};

export default RankedProffesorProfile;