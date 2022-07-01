import React from 'react';
import { Container } from '@mui/system';
import RankedProffesorProfile from './RankedProffesorProfile';
import useStaff from '../../../hooks/useStaff';





const RankedProffesors = () => {
const [staffs] = useStaff()
    return (
        <div>
             <Container style={{marginTop:'20px'}}>
             
    
    
     <div style={{padding:'20px'}} className='gridStaff'>

     
        {staffs?.filter((staff) => staff.rank === 'higher')?.map(staff=> <RankedProffesorProfile
        key={staff._id}
        staff={staff}></RankedProffesorProfile>)
         
            
          
        }
        </div>
      
      
    
             </Container>
        </div>
    );
};

export default RankedProffesors;