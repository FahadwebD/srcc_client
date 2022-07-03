import React, { useEffect, useState } from 'react';
import { Backdrop, Box, Button, Fade, Input,  MenuItem, Modal, Select, TextField } from '@mui/material';
import { DatePicker } from '@material-ui/pickers';
import moment from 'moment';
import AddStudent from './AddStudent';
import StudentTable from './StudentTable';
import useCourses from '../../../hooks/useCourses';
import useStudent from '../../../hooks/useStudent';

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

   
    // name,
    // roll,

    // regNo,
    // category,
    // course,
    // mobile,
    // sessionStart,
    // sessionEnd,

    const [courses ] = useCourses()
    
    const [open, setOpen] = React.useState(false);
    const [student,setStudent] = useStudent()
 
    const [form, setForm] = useState({
      _id:"",
      image:"",
      name: "",
      roll: "",
      course: "",
      regNo:"",
      category:"",
      speech:"",
      sessionStart:"",
      sessionEnd:"",
      records: [],
    });




    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);









 const handleStaffEdit = (_id) =>{

    console.log(_id)
const found = student.find(obj => {
    return obj._id ===_id;
  });
 
  setForm(found)
    handleOpen()
 }

const call =()=>{
  fetch('https://peaceful-spire-22388.herokuapp.com/student')
  .then(res=>res.json())
  .then(data=>setStudent(data))
}
 function updateForm(value) {
  return setForm((prev) => {
    return { ...prev, ...value };
  });
}


    const handleStaffSubmit = e => {
      
       
        const updateStaff = {
             name:form.name,
            roll:form.roll,
            regNo:form.regNo,
            category:form.category,
            course:form.course,
            mobile:form.mobile,
            sessionStart:form.sessionStart,
            sessionEnd:form.sessionEnd,
            _id:form._id
            
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
                  alert('Student Updated')
                  call ()
                   console.log('ok')
               }
           })

      

        e.preventDefault();
    }
    console.log(student)
     
    return (
        <div>
            <div style={{marginTop:'50px'}}>
            <div style={{display:'flex' , alignItems:'center' , justifyContent:"space-between"}}>
            <div>
                     <h1>ALL STUDENT</h1>
                </div>
                <div>
                <AddStudent call={call}></AddStudent>
                    </div>
                </div>
            </div>
            
           <div> <StudentTable student={student}
            setStudent={setStudent}
            handleStudentEdit={handleStaffEdit}
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
           
           <h3>Update {form.name} Profile</h3>
           <form onSubmit={handleStaffSubmit}>
         <div style={{display:'flex' , alignItems:'center'}}>
         <div>
       
          
           </div>
                <div>
                <TextField
                    sx={{ width: '75%' }}
                    label="Name"
                  
                    value={form.name}
                    onChange={(e) => updateForm({ name: e.target.value })}
                   
                    variant="standard" />
                
                <TextField
                    sx={{ width: '75%' }}
                    label="Admission Roll"
                   
                    value={form.roll}
                    onChange={(e) => updateForm({ roll: e.target.value })}
                    variant="standard" />
               
               
               <div style={{display:'flex' ,padding:"10px 35px" , alignItems:'center'}}>
                <div>
                <TextField
                style={{margin:'10px'}}
          
          label="Session Start"
          variant="standard" 
          value={form.sessionStart}
          onChange={(e) => updateForm({ sessionStart: e.target.value })}
         
        />
                </div>
            
                <div>
                <TextField
                style={{margin:'10px'}}
         
          label="Session end"
          variant="standard" 
        
          value={form.sessionEnd}
          onChange={(e) => updateForm({ sessionEnd: e.target.value })}
          
        />
                </div>
               </div>
                <TextField
                    sx={{ width: '75%' }}
                    label="Registarion No"
                    
                    value={form.regNo}
          onChange={(e) => updateForm({ regNo: e.target.value })}
                    variant="standard" />
                    
                <TextField
                    sx={{ width: '75%' }}
                    label="Mobile"
                    
                    value={form.mobile}
                    onChange={(e) => updateForm({ mobile: e.target.value })}
       
                   
                    variant="standard" />
                 </div>
         </div>
        
       <div>
       <Select
          sx={{ width: '40%', m: 1 , marginTop:'20px !important'}}
          
          id="outlined-size-small"
          
          value={form.category}
          onChange={(e) => updateForm({ category: e.target.value })}
       
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
       
          select
          label="Which Course"
          value={form.course}
          onChange={(e) => updateForm({ course: e.target.value })}
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