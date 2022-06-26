import React, { useState } from 'react';
import CountUp from 'react-countup/build/'
import backg from '../../../assets/images/BDRCS-Managing-Board-Induction-2021-695x400.jpg'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ReactVisibilitySensor from 'react-visibility-sensor';
import useNumbers from '../../../hooks/useNumbers';



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
       <div style={{backgroundColor: 'rgba(222, 216, 216, 0.45)' , border:"solid 1px red", borderRadius: '50%',
    width: '100px',
    height: '100px' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
         <AccountBalanceIcon style={{color:"red" , fontSize:'50px'}}></AccountBalanceIcon>
       </div>
       <div>
        <div style={{textAlign:'start'}}>
        <h1 style={{color:'white' , margin:'0' , padding:'0'}}>
          
          
          
        <CountUp start={focus ? 0 : null} end={numbers[0]?.number} duration={2} redraw={true}>
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
       <div style={{backgroundColor: 'rgba(222, 216, 216, 0.45)' , border:"solid 1px red", borderRadius: '50%',
    width: '100px',
    height: '100px' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
         <PeopleAltIcon  style={{color:"red" , fontSize:'50px'}}></PeopleAltIcon>
       </div>
       <div>
        <div style={{textAlign:'start'}}>
        <h1 style={{color:'white' , margin:'0' , padding:'0'}}><CountUp start={focus ? 0 : null} end={numbers[1]?.number} duration={2} redraw={true}>
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

  <Grid item xs={6} md={3}>
  <div style={{display:'flex' , flexDirection:'column', justifyContent:'center' , alignItems:'center'}}>
       <div style={{backgroundColor: 'rgba(222, 216, 216, 0.45)' , border:"solid 1px red" , borderRadius: '50%',
    width: '100px',
    height: '100px' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
         <AdminPanelSettingsIcon style={{color:"red" , fontSize:'50px'}}></AdminPanelSettingsIcon>
       </div>
       <div>
        <div style={{textAlign:'start'}}>
        <h1 style={{color:'white' , margin:'0' , padding:'0'}}><CountUp start={focus ? 0 : null} end={numbers[2]?.number} duration={2} redraw={true}>
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
       <div style={{backgroundColor: 'rgba(222, 216, 216, 0.45)' , border:"solid 1px red" , borderRadius: '50%',
    width: '100px',
    height: '100px' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
         <MapsHomeWorkIcon style={{color:"red" , fontSize:'50px'}}></MapsHomeWorkIcon>
       </div>
       <div>
        <div style={{textAlign:'start'}}>
        <h1 style={{color:'white' , margin:'0' , padding:'0'}}><CountUp start={focus ? 0 : null} end={numbers[3]?.number} duration={2} redraw={true}>
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

  </Grid>
    </Box>
        </div>
        </>
    );
};

export default CountUps;