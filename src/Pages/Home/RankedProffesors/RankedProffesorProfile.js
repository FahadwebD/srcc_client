import React from 'react';

import { Link } from 'react-router-dom';
import './RankedProfessor.css'
const RankedProffesorProfile = ({staff}) => {
    return (
        <div>

  
    <div className="rankCard"><img src={`data:image/png;base64,${staff.image}`}  alt="prof"/>
    <h2> {staff.name}</h2>
    <span>{staff.designation}</span>
    {staff.speech===undefined ?'Nothing':<p> {staff.speech.slice(0, 60)+'...'}</p>}
    

    <Link style={{textDecoration:'none' }} to={`/speech/${staff._id}`}><button>Read More</button></Link> 
    </div>
    
   
        </div>
       
    );
};

export default RankedProffesorProfile;