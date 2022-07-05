import React, { useState } from 'react';
import CountUp from 'react-countup/build/'
import backg from '../../../assets/images/w.JPG'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import MenuBookIcon from '@mui/icons-material/MenuBook';

import ReactVisibilitySensor from 'react-visibility-sensor';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import useNumbers from '../../../hooks/useNumbers';
import SchoolIcon from '@mui/icons-material/School';


const CountUps= () => {
  const [focus, setFocus] = useState(false);
 const [numbers , setNumbers] = useNumbers([]);
    return (
       <>
       <div style={{margin:'70px'}}>
       <h1 style={{}}>Sylhet Red Crecent Nursing College in Numbers</h1>
       <hr style={{width:'10%' , backgroundColor:'red' , border: '1px solid red'}} />
       </div>
        <div
        style={{
            marginTop:'10px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: "100%",
            height: 'auto',
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0.5)), url(${backg})`,
            backgroundAttachment:'fixed'
            
        }}>
             <Box style={{padding:'80px'}} sx={{ flexGrow: 1 }}>
           <Grid container spacing={2}>

  

  <Grid item xs={6} md={3}>
  <div style={{display:'flex' , flexDirection:'column', justifyContent:'center' , alignItems:'center'}}>
       <div style={{backgroundColor: 'rgba(222, 216, 216, 0.45)' , border:"solid 1px red" , borderRadius: '50%',
    width: '100px',
    height: '100px' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
         <SchoolIcon style={{color:"red" , fontSize:'50px'}}></SchoolIcon>
       </div>
       <div>
        <div style={{textAlign:'start'}}>
        <h1 style={{color:'white' , margin:'0' , padding:'0'}}><CountUp start={focus ? 0 : null} end={parseFloat(numbers[2]?.numbers)} duration={2} redraw={true}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
                <ReactVisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setFocus(true);
                    } 
                  }}
                >
                  <a>+</a>
                </ReactVisibilitySensor>
              </div>
            )}
          </CountUp>
          </h1>
         <p style={{color:'white' , margin:'0' , padding:'0'}}>{numbers[2]?.title}</p>
        </div>
       </div>
   </div>
  </Grid>
  <Grid item xs={6} md={3}>
   <div style={{display:'flex' , flexDirection:'column', justifyContent:'center' , alignItems:'center'}}>
       <div style={{backgroundColor: 'rgba(222, 216, 216, 0.45)' , border:"solid 1px red", borderRadius: '50%',
    width: '100px',
    height: '100px' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
         <HowToRegIcon style={{color:"red" , fontSize:'50px'}}></HowToRegIcon>
       </div>
       <div>
        <div style={{textAlign:'start'}}>
        <h1 style={{color:'white' , margin:'0' , padding:'0'}}>
          
          
          
        <CountUp start={focus ? 0 : null} end={parseFloat(numbers[0]?.numbers)}duration={2} redraw={true}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
                <ReactVisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setFocus(true);
                    } 
                  }}
                >
                  <a>+</a>
                </ReactVisibilitySensor>
              </div>
            )}
          </CountUp>
          
          
          
          
          </h1>
         <p style={{color:'white' , margin:'0' , padding:'0'}}>{numbers[0]?.title}</p>
        </div>
       </div>
   </div>
  </Grid>

 
  <Grid item xs={6} md={3}>
  <div style={{display:'flex' , flexDirection:'column', justifyContent:'center' , alignItems:'center'}}>
       <div style={{backgroundColor: 'rgba(222, 216, 216, 0.45)' , border:"solid 1px red" , borderRadius: '50%',
    width: '100px',
    height: '100px' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
         <MenuBookIcon style={{color:"red" , fontSize:'50px'}}></MenuBookIcon>
       </div>
       <div>
        <div style={{textAlign:'start'}}>
        <h1 style={{color:'white' , margin:'0' , padding:'0'}}><CountUp start={focus ? 0 : null} end={parseFloat(numbers[3]?.numbers)} duration={2} redraw={true}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
                <ReactVisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setFocus(true);
                    } 
                  }}
                >
                  <a>+</a>
                </ReactVisibilitySensor>
              </div>
            )}
          </CountUp>
          </h1>
         <p style={{color:'white' , margin:'0' , padding:'0'}}>{numbers[3]?.title}</p>
        </div>
       </div>
   </div>
  </Grid>
  <Grid item xs={6} md={3}>
  <div style={{display:'flex' , flexDirection:'column', justifyContent:'center' , alignItems:'center'}}>
       <div style={{backgroundColor: 'rgba(222, 216, 216, 0.45)' , border:"solid 1px red", borderRadius: '50%',
    width: '100px',
    height: '100px' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
         <PeopleAltIcon  style={{color:"red" , fontSize:'50px'}}></PeopleAltIcon>
       </div>
       <div>
        <div style={{textAlign:'start'}}>
        <h1 style={{color:'white' , margin:'0' , padding:'0'}}><CountUp start={focus ? 0 : null} end={parseFloat(numbers[1]?.numbers)} duration={2} redraw={true}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
                <ReactVisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setFocus(true);
                    } 
                  }}
                >
                  <a>+</a>
                </ReactVisibilitySensor>
              </div>
            )}
          </CountUp>
          </h1>
         <p style={{color:'white' , margin:'0' , padding:'0'}}>{numbers[1]?.title}</p>
        </div>
       </div>
   </div>
  </Grid>
  </Grid>
    </Box>
        </div>
        </>
    );
};

export default CountUps;