
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import viceChairmen from '../../../assets/images/Vice-Chairman-Monsuzzaman-Chowdhury-Babul-1507x1536.jpg'

const ViceCCard = () => {
    return (
        <div>
             <Card style={{padding:'10px'}} >
      <CardActionArea>
       <img src={viceChairmen} alt=""  style={{width:"250px" , height:'250px'}}/>
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

export default ViceCCard;