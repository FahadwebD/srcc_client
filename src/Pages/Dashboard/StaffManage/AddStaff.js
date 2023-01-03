import React, { useState } from 'react';
import { Backdrop, Box, Button, Fade, Input, MenuItem, Modal, TextField } from '@mui/material';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 650,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    
  };


const AddStaff = ({callUse}) => {
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');

    const [mobile, setMobile] = useState('');
     const [image, setImage] = useState(null);
     const [img, setImg] = useState();
    const [open, setOpen] = React.useState(false);
    const [categoryStaff , setCategoryStaff] = useState()
    const [rank , setRank] = useState()
    const [speech , setSpeech] = useState()
    const [committee , setCommittee] = useState()


    const onImageChange = (e) => {
      setImage(e.target.files[0])
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    };
    const handleStaffChange = (event) => {
      setCategoryStaff(event.target.value);
    };
    const handleRankChange = (event) => {
      setRank(event.target.value);
    };
   console.log(name)
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
        formData.append('rank', rank);
        formData.append('speech', speech);
        formData.append('committee' , committee)
        formData.append('image', image);
        console.log(formData)
        fetch('https://serversrcnc-production.up.railway.app/staff', {
            method: 'POST',
           
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    
                    setImg(null);
                    handleClose()
                    callUse()
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
          <div style={{display:'flex' , justifyContent:'center'}}>
          <div> <img src={img} alt="" style={{height:'100px' , width:'100px'}}/>
          <Input
                sx={{ width: '75%'  , marginTop:'10px'}}
                    accept="image/*"
                    type="file"
                    onChange={onImageChange}
                /></div>
                <div>
                  <TextField
                    sx={{ width: '40%'   , m:2}}
                    label="Name"
                   
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
              
                <TextField
                    sx={{ width: '40%' , m:2}}
                    label="Designation"
                    
                    onChange={e => setDesignation(e.target.value)}
                    variant="standard" />
                <TextField
                    sx={{ width: '25%', m:1 }}
                    label="Mobile"
                   
                    onChange={e => setCommittee(e.target.value)}
                    variant="standard" />
                <TextField
                    sx={{ width: '25%', m:1 }}
                    label="Mobile"
                   
                    onChange={e => setMobile(e.target.value)}
                    variant="standard" />
               
                <TextField
           variant="standard" 
          sx={{ width: '25%',  m:1 }}
          id="outlined-size-small"
          
          select
          label="Categories"
          value={categoryStaff}
          onChange={handleStaffChange}
        >
        
            <MenuItem key='teacher' value='t'>
              Teacher
            </MenuItem>
            <MenuItem key='adminatrator' value='a'>
              Adminestrator
            </MenuItem>
            <MenuItem key='committee' value='c'>
              Committee
            </MenuItem>
            <MenuItem key='other' value='o'>
              Other
            </MenuItem>
        </TextField>


        <TextField
           variant="standard" 
          sx={{ width: '20%',  m:1}}
          id="outlined-size-small"
         
          select
          label="Ranking"
          value={rank}
          onChange={handleRankChange}
        >
        
            <MenuItem key='teacher' value='high'>
              High
            </MenuItem>
            <MenuItem key='adminatrator' value='higher'>
              Higher 
            </MenuItem>
            <MenuItem key='other' value='highest'>
              Highest
            </MenuItem>
        </TextField>
               </div>
          </div>
          <TextField
                    style={{height:"200px" , overflowY:"scroll"}}
                    sx={{ width: '100%', m:1 }}
                    label="Speech"
                    
                    multiline
                    maxRows={1000}
                    onChange={e => setSpeech(e.target.value)}
                    variant="standard" />
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