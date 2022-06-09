import React, { useState } from 'react';
import welcomepic from '../../../assets/images/welcome.jpg'
import './button.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";



const Welcome = () => {
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
  
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
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ratione, unde, alias reprehenderit, sequi tempora a sint ex possimus sit fuga dicta eaque rerum perferendis laudantium mollitia incidunt hic! Veniam quidem, pariatur ex dolor laudantium ratione veritatis fugit dolorem voluptates error. Quam atque quia sit quaerat, ipsa repellendus laudantium eaque! Voluptas doloremque quam consequatur, eligendi numquam saepe atque iste soluta ipsam beatae nobis recusandae, voluptate asperiores cupiditate dolorum porro officia reprehenderit sint voluptatibus reiciendis aspernatur. Distinctio velit dolorem quasi, est dolor assumenda earum nobis debitis nesciunt commodi corporis, illum dolores eaque blanditiis laudantium sequi unde dolore provident voluptate numquam. Architecto tenetur quisquam error officiis blanditiis reiciendis iure nihil quia, incidunt sint est impedit aperiam nisi molestias eos, necessitatibus sapiente vel cum animi inventore eveniet porro assumenda asperiores! Vitae eaque sapiente, doloremque consectetur error distinctio obcaecati sint iste assumenda? Vel explicabo, similique adipisci praesentium blanditiis quod perspiciatis ipsa cupiditate laudantium aliquid.</p>
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
                          src="https://www.youtube.com/embed/gxfoKisJNPU"
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