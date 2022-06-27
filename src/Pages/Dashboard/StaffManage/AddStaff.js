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


const AddStaff = () => {
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');

    const [mobile, setMobile] = useState('');
     const [image, setImage] = useState(null);
     const [img, setImg] = useState();
    const [success, setSuccess] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [categoryStaff , setCategoryStaff] = useState()

    const onImageChange = (e) => {
      setImage(e.target.files[0])
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    };
    const handleStaffChange = (event) => {
      setCategoryStaff(event.target.value);
    };
   console.log(categoryStaff)
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
        formData.append('name', name);
        formData.append('designation', designation);
        formData.append('mobile', mobile);
        formData.append('categoryStaff', categoryStaff);

        formData.append('image', image);
        console.log(formData)
        fetch('http://localhost:5000/staff', {
            method: 'POST',
            headers: {
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
          },
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Data added successfully')
                    setImg(null);
                    handleClose()
                  alert('Staff added successfully')
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
           <img src={img} alt="" style={{height:'100px' , width:'100px'}}/>
                <TextField
                    sx={{ width: '75%' }}
                    label="Name"
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '75%' }}
                    label="Designation"
                    required
                    onChange={e => setDesignation(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '75%' }}
                    label="Mobile"
                    required
                    onChange={e => setMobile(e.target.value)}
                    variant="standard" />
                <br />
                <TextField

          sx={{ width: '81%',  marginTop:'10px !important' , padding:'10px !important'}}
          id="outlined-size-small"
          required
          select
          label="Which Categories"
          value={categoryStaff}
          onChange={handleStaffChange}
        >
        
            <MenuItem key='teacher' value='t'>
              Teacher
            </MenuItem>
            <MenuItem key='adminatrator' value='a'>
              Adminestrator
            </MenuItem>
            <MenuItem key='other' value='o'>
              Other
            </MenuItem>
        </TextField>
        <br></br>
                <Input
                sx={{ width: '75%'  , marginTop:'10px'}}
                    accept="image/*"
                    type="file"
                    onChange={onImageChange}
                />
                <br />
                <Button variant="contained" type="submit" style={{ backgroundColor: 'red' , marginTop:'20px' }}>
                    Add Staff
                </Button>
            </form>
            </Box>
        </Fade>
      </Modal>
        </div>
       
        
        </>
    );
};

export default AddStaff;