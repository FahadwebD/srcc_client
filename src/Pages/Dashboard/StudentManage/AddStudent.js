import React, { useState } from 'react';
import { Backdrop, Box, Button, Fade, Input,  MenuItem, Modal, Select, TextField } from '@mui/material';
import useCourses from '../../../hooks/useCourses';
import { DatePicker } from '@material-ui/pickers';
import { YearRangePicker } from 'react-year-range-picker'
import moment from 'moment';






const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    maxHeight:'700px',
    overflowY:'scroll'
  };


const AddStudent = ({call}) => {
    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('');

    const [motherName, setMotherName] = useState('');

    const [roll, setRoll] = useState('');
    const [courseId, setCourseId] = useState('');
    const [course, setCourse] = useState('');
    const [regNo, setRegNo] = useState('');
    const [category, setCategory] = useState('');
    const [mobile, setMobile] = useState('');
    const [image, setImage] = useState(null);

    const [sessionStarted, setSessionStarted] = React.useState(new Date());
    const [sessionEnded, setSessionEnded] = React.useState(new Date());
    const [success, setSuccess] = useState(false);
    const [open, setOpen] = React.useState(false);
    
    const [courses , setCourses] = useCourses()
    console.log(courses)

    
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
 
      const handleCourseChange = (event) => {
        setCourse(event.target.value);
        const found =courses.find(obj => {
          return obj.courseName ===event.target.value;
    
    
        });
        setCourseId(found._id)
      };  

      const handleCategoryChange = (event) => {
        setCategory(event.target.value);
      };
      const sessionStart = moment(sessionStarted).format('YYYY');
      const sessionEnd =moment(sessionEnded).format('YYYY');
    const handleSubmit = e => {
     
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('name', name);
        formData.append('fatherName', fatherName);
        formData.append('motherName', motherName);
        formData.append('roll', roll);
        formData.append('sessionStart', sessionStart);
        formData.append('sessionEnd', sessionEnd);
        formData.append('regNo', regNo);
        formData.append('course', course);
        formData.append('courseId', courseId);

        formData.append('category', category);
        formData.append('mobile', mobile);
        formData.append('image', image);
        console.log(formData)
        fetch('https://peaceful-spire-22388.herokuapp.com/student', {
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
                    call()
                    handleClose()
                    
                  alert('Student added successfully')
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
           
           <h3>Add A Student</h3>
           <form onSubmit={handleSubmit}>
         <div style={{display:'flex' , alignItems:'center'}}>
                <div>
                <TextField
                    sx={{ width: '75%' }}
                    label="Name"
                    
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%' }}
                    label="Father Name"
                    
                    onChange={e => setFatherName(e.target.value)}
                    variant="standard" />
                    <TextField
                    sx={{ width: '75%' }}
                    label="Mother Name"
                    
                    onChange={e => setMotherName(e.target.value)}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%' }}
                    label="Admission Roll"
                    
                    onChange={e => setRoll(e.target.value)}
                    variant="standard" />
               
               
               <div style={{display:'flex' ,padding:"10px 35px" , alignItems:'center'}}>
                <div>
                <DatePicker
                style={{margin:'10px'}}
          views={['year']}
          label="Session Start"
          value={sessionStarted}
          onChange={(newValue) => {
            setSessionStarted(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
                </div>
            
                <div>
                <DatePicker
                style={{margin:'10px'}}
          views={['year']}
          label="Session end"
          value={sessionEnded}
          onChange={(newValue) => {
            setSessionEnded(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
                </div>
               </div>
                <TextField
                    sx={{ width: '75%' }}
                    label="Registarion No"
                    
                    onChange={e => setRegNo(e.target.value)}
                    variant="standard" />
               
                <TextField
                    sx={{ width: '75%' }}
                    label="Mobile"
                   
                    onChange={e => setMobile(e.target.value)}
                    variant="standard" />
                 </div>
         </div>
        
       <div>
       <Select
          sx={{ width: '40%', m: 1 , marginTop:'20px !important'}}
          
          id="outlined-size-small"
          value={category}
          onChange={handleCategoryChange}
          required
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

          sx={{ width: '40%',  marginTop:'10px !important' , padding:'10px !important'}}
          id="outlined-size-small"
          required
          select
          label="Which Course"
          value={courses?.coursename}
          onChange={handleCourseChange}
        >
          {courses?.map((option) => (
            <MenuItem key={option?.courseName} value={option?.courseName}>
              Course .{option?.courseName}
            </MenuItem>
          ))}
        </TextField>
       </div>
       
        
                
                
               
                
               
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