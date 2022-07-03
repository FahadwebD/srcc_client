import React, { useState } from 'react';

import './button.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import welcomepic from '../../../assets/images/w.JPG'
import useWelcome from '../../../hooks/useWelcome';



const Welcome = () => {
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const [welcome] = useWelcome();
    const openModal = () => {
      setModal(!modal);
    };
  
    const spinner = () => {
      setVideoLoading(!videoLoading);
    };

    return (
        <div style={{margin:'30px'}}>
            <Container>
            <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
        <Grid item xs={12} md={6}>
      
          <div style={{textAlign:'start'}}>
              <h2>Welcome to Sylhet Red Crecent Nursing College</h2>
               <p>{welcome[0]?.massage}.</p>
               <div style={{width:'100%', padding:"10px" ,border:'none' , backgroundColor:'red', borderRadius:'10px' , color:'white' , display:'flex', alignItems:'center' ,justifyContent:'space-between'}}><small>READ MORE.. </small><small><CheckCircleIcon /></small></div>
           </div>
         
        </Grid> 
        <Grid item xs={12} md={6}>
          
          <div style={
               {
                display: 'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: "100%",
                height: '100%',
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0.5)), url(${welcomepic})`
               }
           }>
              <button onClick={openModal}  id='play-btn'
              >{modal ? (
                <section className="modal__bg">
                  <div className="modal__align">
                    <div className="modal__content" modal={modal}>
                      <IoCloseOutline
                        className="modal__close"
                        arial-label="Close modal"
                        onClick={setModal}
                      />
                      <div className="modal__video-align">
                        {videoLoading ? (
                          <div className="modal__spinner">
                            <BiLoaderAlt
                              className="modal__spinner-style"
                              fadeIn="none"
                            />
                          </div>
                        ) : null}
                        <iframe
                          className="modal__video-style"
                          onLoad={spinner}
                          loading="lazy"
                          width="800"
                          height="500"
                          src={welcome[0]?.linkYoutube}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </section>
              ) : null}</button>
           </div>
           
        </Grid>
        </Grid>
    </Box>
   
            </Container>
          
           <div>
         
           </div>
        </div>
    );
};

export default Welcome;