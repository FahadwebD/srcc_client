import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import viceChairmen from '../../../assets/images/Secretary-Md.-Abdur-Rahman-Jamil.jpg'

const RankedProffesorProfile = () => {
    return (
        <div>
           <Card style={{padding:'5px' , height:"290px"}}  sx={{ boxShadow: 3 }}  >
      <CardActionArea>
       <img src={viceChairmen} alt=""  style={{width:"200px" , height:'200px'}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Vice Chairmen
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sylhet RedCricent Socity
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
       
    );
};

export default RankedProffesorProfile;