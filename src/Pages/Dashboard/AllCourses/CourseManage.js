import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, InputLabel, TextField } from '@mui/material';
import useCourses from '../../../hooks/useCourses';
import AddCourses from './AddCourses';
import AllCourses from './AllCourses';





const CourseManage = () => {

  

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
       
        boxShadow: 24,
        p: 4,
      };


    const [courses , setCourses] = useCourses()
    const [open, setOpen] = React.useState(false);
    const [id, setId] =useState()
    const [form, setForm] = useState({
      _id:"",
      image:"",
      courseName: "",
      duration: "",
      sit: "",
      records: [],
    });

   


    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setForm({})
      setOpen(false)};


   

  

   


const callUse= () =>{

    fetch('http://localhost:5000/courses')
    .then(res=>res.json())
    .then(data=>setCourses(data))


}

 const handleEdit = (_id) =>{
  

    
  fetch(`http://localhost:5000/courses/${_id}`)
  .then(res=>res.json())
  .then(record => {
    setForm(record)
  setId(record._id)})


 
    handleOpen()



 }

console.log(form?'yes':'no')

function updateForm(value) {
  return setForm((prev) => {
    return { ...prev, ...value };
  });
}
    const handlenoticesubmit = e => {

      
   
      const editedNotice = {
   
        courseName: form.courseName,
        duration: form.duration,
        sit: form.sit,

      

        

      };
       fetch(`http://localhost:5000/courses/edit/${id}`, {
           method: 'PUT',
          
           headers: {
              //  authorization: `Bearer ${localStorage.getItem('accessToken')}`,
               'content-type': 'application/json'
           },
           body: JSON.stringify(editedNotice)
       })
           .then(res => res.json())
           .then(data => {
               if (data.modifiedCount) {
                   alert('Notice Edited')
                   handleClose()
                   callUse()
                   console.log('ok')
               }
           })

      

        e.preventDefault();
    }
   
     


    const handleDelete = (_id) =>{
     
  
         fetch(`http://localhost:5000/courses/${_id}`, {
           method:'DELETE',
         //   headers: {
         //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
         // },
         })
         .then(res => res.json())
         .then(data=>{
           if(data.deletedCount>0){
            
             alert('delete')
          
             const remaining = courses?.filter(staff => staff._id !== _id)
             
             setCourses(remaining)
           }
         })
       }
  
  



















    return (
        <div style={{marginTop:'50px'}}>
            <div style={{display:'flex' , alignItems:'center' , justifyContent:"space-between"}}>
                <div>
                     <h1>ALL Course</h1>
                </div>
                <div>
                <AddCourses
                callUse={callUse}
                ></AddCourses>
                </div>
            </div>
          {courses.length?<div>
            
            <AllCourses courses={courses}
             setCourses={setCourses}
             handleEdit={handleEdit}
             handleDelete={handleDelete}>
              
             </AllCourses>
            </div>:<div>
              'loading'
            </div>}  
            
            <div>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Update Course
          </Typography>
          <form onSubmit={handlenoticesubmit} style={{ maxWidth:'400px',margin:'30px 30px 30px 30px'}}>
                      
          <div >
          <div>
                <div>
                <img
                style={{ width: '120px', height: '120px' }}
                src={`data:image/png;base64,${form.image}`} alt="" />
                </div>
                
                  
                </div>
                         <div>
                         <InputLabel shrink htmlFor="bootstrap-input">
                           Course Name
        </InputLabel>
                         <TextField
                            variant="standard"
                          
                         
                            id="outlined-size-small"
                            name="Name"
                            style={{ width: '100%' }}
                            value={form.courseName}
                            onChange={(e) => updateForm({ courseName: e.target.value })}
                           
                         
                            
                        />
                         <br/>
                         <br/>
                         <InputLabel shrink htmlFor="bootstrap-input">
                           Duration
        </InputLabel>
                         <TextField
                          
                            variant="standard"
                            id="outlined-size-small"
                            name=" Duration"
                            style={{ width: '100%' }}
                            
                            multiline
                             maxRows={1000}
                            value={form.duration}
                            onChange={(e) => updateForm({ duration: e.target.value })}
                          
                            
                        />
                                   <InputLabel shrink htmlFor="bootstrap-input">
                           Sit
        </InputLabel>
                         <TextField
                          
                            variant="standard"
                            id="outlined-size-small"
                            name="Sit"
                            style={{ width: '100%' }}
                            
                            multiline
                             maxRows={1000}
                            value={form.sit}
                            onChange={(e) => updateForm({ sit: e.target.value })}
                          
                            
                        />
                         
                         </div>
          </div>
                      
                      
                      
                         
                        <div style={{ textAlign:'right' ,marginTop:"40px",}}><Button style={{backgroundColor:'green' }} type="submit" variant="contained">Update</Button></div>

                        </form>
        </Box>
      </Modal>
            </div>
        </div>
    );
};

export default CourseManage;