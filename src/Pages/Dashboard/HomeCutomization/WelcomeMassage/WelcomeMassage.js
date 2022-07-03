import React, { useEffect, useState } from 'react';
import welcomepic from '../../../../assets/images/welcome.jpg'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import useWelcome from '../../../../hooks/useWelcome';
import { Button, Modal, TextField, Typography } from '@mui/material';





const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor:'white',
    border: '2px solid red',
    boxShadow: 24,
    p: 4,
  };




const WelcomeMassage = () => {
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const [open, setOpen] = React.useState(false);
    const [welcome , setWelcome] = useWelcome();
    const [form, setForm] = useState({
      _id:"",
      massage: "",
      linkYoutube: "",
      records: [],
    });
    const handleOpen = () => {
      setForm(welcome[0])
      setOpen(true)};
    const handleClose = () => {
      call()
      setOpen(false)};


    

    
    const openModal = () => {
      setModal(!modal);
    };
  
    const spinner = () => {
      setVideoLoading(!videoLoading);
    };
 
 
   
   
   
    const call=()=>{

        fetch('https://peaceful-spire-22388.herokuapp.com/welcome')
        .then(res=>res.json())
        .then(data=>setWelcome(data))

  
 }

    function updateForm(value) {
      return setForm((prev) => {
        return { ...prev, ...value };
      });
    }
    const handleWelcomeSubmit = e => {
        const _id = welcome[0]._id
      
        const updateMassage = {
            massage: form.massage,
            linkYoutube: form.linkYoutube,
            _id 
            
        }
       console.log(updateMassage)
   
       fetch('http://localhost:5000/welcome/edit', {
           method: 'PUT',
           headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
               'content-type': 'application/json'
           },
           body: JSON.stringify(updateMassage)
       })
           .then(res => res.json())
           .then(data => {
               if (data.modifiedCount) {
                  alert('Updated Welcome');
                  handleClose()
                   console.log('ok')
               }
           })

      

        e.preventDefault();
    }


    return (
        <div style={{margin:'30px'}}>
            <Container>
            <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
        <Grid item xs={12} md={6}>
      
          <div style={{textAlign:'start'}}>
              <h2>Welcome to Sylhet Red Crecent Nursing College</h2>
               <p>{welcome[0]?.massage}.</p>
               <Button style={{width:'100%', padding:"10px" ,border:'none' , backgroundColor:'red', borderRadius:'10px' , color:'white' , display:'flex', alignItems:'center' ,justifyContent:'space-between'}} onClick={handleOpen}>Update</Button>
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
                          style={{marginTop:'130px'}}
                          width="500"
                          height="400"
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
           <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Update In Numbers
          </Typography>
          <form onSubmit={handleWelcomeSubmit} style={{ maxWidth:'400px',margin:'30px 30px 30px 30px'}}>
                      
                        <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="Time"
                           
                            multiline
                            maxRows={1000}
                            
                            value={form.massage}
                            onChange={(e) => updateForm({ massage: e.target.value })}
                            size="small"
                        />
                         <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="Time"
                            value={form.linkYoutube}
                            onChange={(e) => updateForm({ linkYoutube: e.target.value })}
                            size="small"
                        />
                      
                      
                      
                        <div style={{ textAlign:'right' , marginRight:'40px'}}><Button style={{backgroundColor:'red' }} type="submit" variant="contained" >Update</Button></div>

                        </form>
        </Box>
      </Modal>
           </div>
        </div>
    );
};

export default WelcomeMassage;