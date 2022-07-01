import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import viceChairmen from '../../../assets/images/Secretary-Md.-Abdur-Rahman-Jamil.jpg'

const RankedProffesorProfile = ({staff}) => {
    return (
        <div>
          
           <Card style={{padding:'10px' ,margin:'10px', height:"290px" ,width:''}}  sx={{ boxShadow: 3 }}  >
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
    
    
        </div>
       
    );
};

export default RankedProffesorProfile;