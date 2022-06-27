import { Button } from '@mui/material';
import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';



const ViceCMassage = () => {
    return (
   
         <Card style={{textAlign:"start" ,padding:'10px' , height:"305px" }} sx={{ minWidth: 230 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Sylhet Red Crecent Soicity
        </Typography>
        <Typography variant="h5" component="div">
         Massage From Vice Chairmen
        </Typography>
        
        <Typography variant="body2">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil expedita officiis ipsum laboriosam nobis, molestiae dolor numquam deleniti facere! Aliquam ad obcaecati provident quae rem ut, eius dolores optio consequuntur iusto quam ipsum magni delectus odit quas natus est reprehenderit omnis fugit mollitia assumenda deleniti at ratione! Inventore totam laudantium impedit minima ipsum reiciendis 
        </Typography>
      </CardContent>
      <CardActions>
        <Link style={{textDecoration:'none'}} to='chairman'><Button style={{backgroundColor:'red' ,position:'relative', right:'0',bottom:'0'}} variant="contained" size="small">Read More</Button></Link>   
      </CardActions>
    </Card>

    
    );
};

export default ViceCMassage;