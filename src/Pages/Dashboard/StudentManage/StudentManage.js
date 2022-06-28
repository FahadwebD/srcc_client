import React, { useEffect, useState } from 'react';
import { Backdrop, Box, Button, Fade, Input,  MenuItem, Modal, Select, TextField } from '@mui/material';
import { DatePicker } from '@material-ui/pickers';
import moment from 'moment';
import AddStudent from './AddStudent';
import StudentTable from './StudentTable';
import useCourses from '../../../hooks/useCourses';

const StudentManage = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const [staffs , setStaffs] = useState([]);

    useEffect(()=>{
        fetch('https://peaceful-spire-22388.herokuapp.com/student')
        .then(res=>res.json())
        .then(data=>setStaffs(data))

    },[staffs])
    // name,
    // roll,

    // regNo,
    // category,
    // course,
    // mobile,
    // sessionStart,
    // sessionEnd,

    const [courses , setCourses] = useCourses()
    const [editStaff ,setEditStaff] = useState()
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState('');
    const [roll, setRoll] = useState('');
    const [course, setCourse] = useState('');
    const [regNo, setRegNo] = useState('');
    const [category, setCategory] = useState('');
    const [mobile, setMobile] = useState('');
    const [sessionStarted, setSessionStarted] = React.useState(new Date());
    const [sessionEnded, setSessionEnded] = React.useState(new Date());




    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


const sessionStart = moment(sessionStarted).format('YYYY');
const sessionEnd =moment(sessionEnded).format('YYYY');



const handleNameChange = (event) => {
  setName(event.target.value);
};
const handleRollChange = (event) => {
  setRoll(event.target.value);
};
const handleRegNoChange = (event) => {
  setRegNo(event.target.value);
};
const handleMobileChange = (event) => {
  setMobile(event.target.value);
};
const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };



 const handleStaffEdit = (_id) =>{

    console.log(_id)
const found = staffs.find(obj => {
    return obj._id ===_id;
  });
  setEditStaff(found)
    handleOpen()
 }
    const handleStaffSubmit = e => {
        const _id = editStaff._id
       
        const updateStaff = {
             name,
            roll,
            regNo,
            category,
            course,
            mobile,
            sessionStart,
            sessionEnd,
            _id
            
        }
       console.log(updateStaff)
   
       fetch('https://peaceful-spire-22388.herokuapp.com/student/edit', {
           method: 'PATCH',
           headers: {
              //  authorization: `Bearer ${localStorage.getItem('accessToken')}`,
               'content-type': 'application/json'
           },
           body: JSON.stringify(updateStaff)
       })
           .then(res => res.json())
           .then(data => {
               if (data.modifiedCount) {
                  handleClose()
                   console.log('ok')
               }
           })

      

        e.preventDefault();
    }
    console.log(staffs)
     
    return (
        <div>
            <div style={{marginTop:'50px'}}>
            <div style={{display:'flex' , alignItems:'center' , justifyContent:"space-between"}}>
            <div>
                     <h1>ALL STUDENT</h1>
                </div>
                <div>
                <AddStudent></AddStudent>
                    </div>
                </div>
            </div>
            
           <div> <StudentTable staffs={staffs}
            setStaffs={setStaffs}
            handleStaffEdit={handleStaffEdit}
            ></StudentTable></div>



            <div>
            <div>
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
           
           <h3>Update {editStaff?.name} Profile</h3>
           <form onSubmit={handleStaffSubmit}>
         <div style={{display:'flex' , alignItems:'center'}}>
         <div>
       
          
           </div>
                <div>
                <TextField
                    sx={{ width: '75%' }}
                    label="Name"
                    required
                    defaultValue={editStaff?.name}
                    
                    onChange={(newValue) => {
                      handleNameChange(newValue);
                    }}
                   
                    variant="standard" />
                
                <TextField
                    sx={{ width: '75%' }}
                    label="Admission Roll"
                    defaultValue={editStaff?.roll}
                    required
                    
                    onChange={(newValue) => {
                      handleRollChange(newValue);
                    }}
                   
                    variant="standard" />
               
               
               <div style={{display:'flex' ,padding:"10px 35px" , alignItems:'center'}}>
                <div>
                <DatePicker
                style={{margin:'10px'}}
          views={['year']}
          label="Session Start"
          
          
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
                    defaultValue={editStaff?.regNo}
                    required
                 
                    onChange={(newValue) => {
                      handleRegNoChange(newValue);
                    }}
                    variant="standard" />
                    
                <TextField
                    sx={{ width: '75%' }}
                    label="Mobile"
                    defaultValue={editStaff?.mobile}
                    required
                  
          onChange={(newValue) => {
            handleMobileChange(newValue);
          }}
                   
                    variant="standard" />
                 </div>
         </div>
        
       <div>
       <Select
          sx={{ width: '40%', m: 1 , marginTop:'20px !important'}}
          
          id="outlined-size-small"
        
          value={category}
          onChange={(newValue) => {
            handleCategoryChange(newValue);
          }}
          required
          label="Category"
        >
         
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
          value={course}
          onChange={(newValue) => {
            handleCourseChange(newValue);
          }}          
          
        >
          {courses?.map((option) => (
            <MenuItem key={option?.coursename} value={option?.coursename}>
              Course .{option?.coursename}
            </MenuItem>
          ))}
        </TextField>
       </div>
       
        
                
                
               
                
               
                <Button variant="contained" type="submit" style={{ backgroundColor: 'green' , marginTop:'20px' }}>
                   Update Student
                </Button>
            </form>
            </Box>
        </Fade>
      </Modal>
            </div>
            </div>
        </div>
    );
};

export default StudentManage;