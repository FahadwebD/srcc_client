
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import viceChairmen from '../../../assets/images/Vice-Chairman-Monsuzzaman-Chowdhury-Babul-1507x1536.jpg'
import useStaff from '../../../hooks/useStaff';

const ViceCCard = () => {

  const [staffs] = useStaff()
    return (
        <div>
             <Card style={{padding:'0px' , height:"325px"     }}  sx={{ boxShadow: 3 }}  >
      <CardActionArea >
       <img src={`data:image/png;base64,${staffs[0]?.image}`} alt=""  style={{width:"200px" , height:'200px'}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {staffs[0]?.designation}
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