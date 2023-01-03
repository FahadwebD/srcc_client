import React, { useState } from 'react';
import { Backdrop, Box, Button, Fade, Input, MenuItem, Modal, Select, TextField } from '@mui/material';



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


const AddCollection = ({call}) => {
    const [title, setTitle] = useState('');
    
    const [category, setCategory] = useState('');
     const [image, setImage] = useState(null);
     const [img, setImg] = useState();
    const [success, setSuccess] = useState(false);
    const [open, setOpen] = React.useState(false);
  

    const onImageChange = (e) => {
      setImage(e.target.files[0])
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    };
  

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
        formData.append('title', title);
        formData.append('category', category);
        formData.append('image', image);
        console.log(formData)
        fetch('https://serversrcnc-production.up.railway.app/gallary', {
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
                    setImg(null);
                    call()
                    handleClose()
                  alert('Photo added successfully')
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
           
           <h3>Add A Photo</h3>
           <form onSubmit={handleSubmit}>
           <img src={img} alt="" style={{height:'100px' , width:'100px'}}/>
                
               
                <TextField
                    sx={{ width: '75%' }}
                    label="Description"
       
                    onChange={e => setTitle(e.target.value)}
                    variant="standard" />
                <br />
                <Select
          sx={{ width: '40%', m: 1 , marginTop:'20px !important'}}
          
          id="outlined-size-small"
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'office'}>Office</MenuItem>
          <MenuItem value={'outside'}>Outside</MenuItem>
          <MenuItem value={'other'}>Other</MenuItem>
        </Select>
                <Input
                sx={{ width: '75%'  , marginTop:'10px'}}
                    accept="image/*"
                    type="file"
                    onChange={onImageChange}
                />
            
        <br></br>
               
                <Button variant="contained" type="submit" style={{ backgroundColor: 'red' , marginTop:'20px' }}>
                    Add Title
                </Button>
            </form>
            </Box>
        </Fade>
      </Modal>
        </div>
       
        
        </>
    );
};

export default AddCollection;