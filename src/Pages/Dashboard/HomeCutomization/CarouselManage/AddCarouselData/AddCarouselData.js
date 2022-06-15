import React, { useState } from 'react';
import { Backdrop, Box, Button, Fade, Input, Modal, TextField } from '@mui/material';



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


const AddCarouselData = () => {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
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
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('caption', caption);
        formData.append('image', image);
        console.log(formData)
        fetch('http://localhost:5000/banner', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Data added successfully')
                    handleClose()
                  alert('Data added successfully')
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
           
           <h3>Add An Item</h3>
           <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '75%' }}
                    label="Caption"
                    required
                    onChange={e => setCaption(e.target.value)}
                    variant="standard" />
                <br />
    
                <Input
                sx={{ width: '75%'  , marginTop:'10px'}}
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />
                <Button variant="contained" type="submit" style={{ backgroundColor: 'red' , marginTop:'20px' }}>
                    Add Data
                </Button>
            </form>
            </Box>
        </Fade>
      </Modal>
        </div>
       
        
        </>
    );
};

export default AddCarouselData;