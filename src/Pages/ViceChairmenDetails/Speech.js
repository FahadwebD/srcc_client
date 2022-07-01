import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import c from '../../assets/images/Vice-Chairman-Monsuzzaman-Chowdhury-Babul-1507x1536.jpg'

const Speech = ({speeches}) => {
    return (
        <div style={{marginTop:'30px' }}>
             <Container>
             <Box
        
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          p:3,
          boxShadow: 3,
          borderTop:'2px solid red'
          
        },
      }}
    >
     <div>
        <div  style={{display:'flex' , }}>
            <div>
            <img src={`data:image/png;base64,${speeches?.image}`} alt="" srcset="" style={{width:'200px' , height:'200px' , border:'5px solid white'}} />
            </div>
            <div style={{textAlign:'start' , marginLeft:'20px'}}>
                <h2>{speeches?.name}</h2>
                <h3>{speeches?.designation}</h3>
                <p>Sylhet Red Crescent Nursing College</p>
            </div>
        </div>
        <div  style={{ whiteSpace: 'pre-line' , textAlign:'left'}}>
        <p style={{ whiteSpace: 'pre-line' , textAlign:'left'}}>
       {speeches?.speech}
        </p>
        </div>
     </div>
   
    </Box>
             </Container>
        </div>
    );
};

export default Speech;