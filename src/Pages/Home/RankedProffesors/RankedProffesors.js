import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import RankedProffesorProfile from './RankedProffesorProfile';
import useStaff from '../../../hooks/useStaff';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



const RankedProffesors = () => {
const [staffs] = useStaff()
    return (
        <div>
             <Container style={{marginTop:'20px'}}>
             
    
    
     <div className='gridStaff'>

     
        {staffs?.slice(1, 4).map(staff=> <RankedProffesorProfile
        key={staff._id}
        staff={staff}></RankedProffesorProfile>)
         
            
          
        }
        </div>
      
      
    
             </Container>
        </div>
    );
};

export default RankedProffesors;