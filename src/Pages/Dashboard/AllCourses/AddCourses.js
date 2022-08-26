import React, { useState } from 'react';
import { Backdrop, Box, Button, Fade, Input, MenuItem, Modal, TextField } from '@mui/material';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    
  };


const AddCourses = ({callUse}) => {
    const [courseName, setCourseName] = useState('');
    
    const [duration , setDuration] = useState('')
    const [sit , setSit] = useState('')
    const [requirements , setRequirements]= useState('')
   
    
    const [success, setSuccess] = useState(false);
    const [open, setOpen] = React.useState(false);
  


  

    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const handleSubmit = e => {
     
        e.preventDefault();
     
       
        const formData = new FormData();
        formData.append('courseName', courseName);
        formData.append('duration', duration);
        formData.append('sit', sit);
        formData.append('requirements', requirements);

        
        console.log(formData)
        fetch('https://peaceful-spire-22388.herokuapp.com/courses', {
            method: 'POST',
        //     headers: {
        //       authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //   },
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Data added successfully')
                    
                    callUse()
                    handleClose()
                
                  alert('Course added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <>
        <div>
        <Button style={{backgroundColor:'red' , color:'white'}} onClick={handleOpen} >Insert Data</Button>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} style={{textAlign:'center'}}>
           
           <h3>Add A Course</h3>
           <form onSubmit={handleSubmit}>
       
                <TextField
                    sx={{ width: '75%' }}
                    label="Course Name"
                  
                    onChange={e => setCourseName(e.target.value)}
                    variant="standard" />
                <br />
             
                <br />
                <TextField
                    sx={{ width: '75%' }}
                    label="Duration"
                    required
                    multiline
                    maxRows={1000}
                    onChange={e => setDuration(e.target.value)}
                    variant="standard" />
                <br />
               
                <br />
                <TextField
                    sx={{ width: '75%' }}
                    label="Seat"
                    required
                    multiline
                    maxRows={1000}
                    onChange={e => setSit(e.target.value)}
                    variant="standard" />
                <br />
               
                <br />
                <TextField
                    sx={{ width: '75%' }}
                    label="Requirements"
                    required
                    multiline
                    maxRows={1000}
                    onChange={e => setRequirements(e.target.value)}
                    variant="standard" />
                <br />
               
                <br />
                
               
            
        <br></br>
               
                <Button variant="contained" type="submit" style={{ backgroundColor: 'red' , marginTop:'20px' }}>
                    Add Notice
                </Button>
            </form>
            </Box>
        </Fade>
      </Modal>
        </div>
       
        
        </>
    );
};

export default AddCourses;