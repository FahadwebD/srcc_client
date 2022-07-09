import React from 'react';

import { Link } from 'react-router-dom';
import './RankedProfessor.css'
const RankedProffesorProfile = ({staff}) => {
    return (
        <div>
{/*           
           <rankCard  style={{padding:'10px' ,margin:'10px', height:"350px" ,width:''}}  sx={{ boxShadow: 3 }}  >
      <rankCardActionArea>
       <img src={`data:image/png;base64,${staff.image}`} alt=""  style={{width:"200px" , height:'180px'}}/>
        <rankCardContent>
          <Typography gutterBottom variant="h6" style={{marginBottom:'-5px'}}  component="div">
          {staff.name}
          </Typography>
          <Typography variant="h6" style={{marginBottom:'10px'}} color="text.secondary">
          {staff.designation}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <Link style={{textDecoration:'none' }} to={`/speech/${staff._id}`}><Button variant="contained" size="small" style={{backgroundColor:'red'}} >Read More</Button></Link>
          </Typography>
        </rankCardContent>
      </rankCardActionArea>
    </rankCard>
     */}
  
    <div className="rankCard"><img src={`data:image/png;base64,${staff.image}`}  alt="prof"/>
    <h1> {staff.name}</h1>
    <span>{staff.designation}</span>
    <p> {staff.speech.slice(0, 60)+'...'}</p>

    <Link style={{textDecoration:'none' }} to={`/speech/${staff._id}`}><button>Read More</button></Link> 
    </div>
    
   
        </div>
       
    );
};

export default RankedProffesorProfile;