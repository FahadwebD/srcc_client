import React, { useState } from 'react';
import { Backdrop, Box, Button, Fade, Input, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material';
import useCourses from '../../../hooks/useCourses';
import { YearRangePicker } from 'react-year-range-picker'







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


const AddStudent = () => {
    const [name, setName] = useState('');
    const [roll, setRoll] = useState('');
    const [session, setSession] = useState('');
    const [course, setCourse] = useState('');
    const [regNo, setRegNo] = useState('');
    const [category, setCategory] = useState('');
    const [mobile, setMobile] = useState('');
    const [image, setImage] = useState(null);
    const [img, setImg] = useState();
    const [yearRange, setYearRange] = useState();
    const [success, setSuccess] = useState(false);
    const [open, setOpen] = React.useState(false);
    
    const [courses , setCourses] = useCourses()
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
    const handleCourseChange = (event) => {
        setCourse(event.target.value);
      };

      

      const handleCategoryChange = (event) => {
        setCategory(event.target.value);
      };

    const handleSubmit = e => {
     
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('roll', roll);
        formData.append('session', session);
        formData.append('regNo', regNo);
        formData.append('course', course);
        formData.append('category', category);
        formData.append('mobile', mobile);
        formData.append('image', image);
        console.log(formData)
        fetch('http://localhost:5000/student', {
            method: 'POST',
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
                    label="Admission Roll"
                    required
                    onChange={e => setRoll(e.target.value)}
                    variant="standard" />
                <br />
                
                <TextField
                    sx={{ width: '75%' }}
                    label="Session"
                    required
                    onChange={e => setSession(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '75%' }}
                    label="Registarion No"
                    required
                    onChange={e => setRegNo(e.target.value)}
                    variant="standard" />
                <br />
                <TextField

          sx={{ width: '90%', m: 1 }}
          id="outlined-size-small"
          required
          select
          label="Select which Doctor Appointment You Want"
          value={courses?.coursename}
          onChange={handleCourseChange}
          helperText="Please select your doctor"
        >
          {courses?.map((option) => (
            <MenuItem key={option?.coursename} value={option?.coursename}>
              Course .{option?.coursename}
            </MenuItem>
          ))}
        </TextField>
        <br />
          <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={category}
          onChange={handleCategoryChange}
          autoWidth
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'poor'}>Poor</MenuItem>
          <MenuItem value={'maritorious'}>Maritorious</MenuItem>
          <MenuItem value={'general'}>General</MenuItem>
        </Select>
                <TextField
                    sx={{ width: '75%' }}
                    label="Mobile"
                    required
                    onChange={e => setMobile(e.target.value)}
                    variant="standard" />
                <br />
               
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

export default AddStudent;