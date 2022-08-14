import React, { useEffect, useState } from 'react';
import { Backdrop, Box, Button, Fade, Input,  MenuItem, Modal, Select, TextField } from '@mui/material';
import { DatePicker } from '@material-ui/pickers';
import moment from 'moment';
import AddStudent from './AddStudent';
import StudentTable from './StudentTable';
import useCourses from '../../../hooks/useCourses';
import useStudent from '../../../hooks/useStudent';
import './Students.scss'
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




    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [students, setStudents] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
  
  
  
    useEffect( () =>{
        fetch(`https://peaceful-spire-22388.herokuapp.com/student/home?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => {
        setStudents(data)
        setDisplayProducts(data)});
    }, [page, size]);

    useEffect( () =>{
        fetch('https://peaceful-spire-22388.herokuapp.com/studentCount')
        .then(res => res.json())
        .then(data =>{
            const count = data.count;
            const pages = Math.ceil(count/10);
            setPageCount(pages);
        })
    }, [])
























































 const handleStaffEdit = (_id) =>{

    console.log(_id)
const found = students.find(obj => {
    return obj._id ===_id;
  });
 
  setForm(found)
    handleOpen()
 }

const call =()=>{
  fetch(`https://peaceful-spire-22388.herokuapp.com/student/home?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => {
        setStudents(data)
        setDisplayProducts(data)});
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
    console.log(students)


    const handleSearch = event => {
      const searchText = event.target.value;

      const matchedProducts = students.filter(product => product.roll.toLowerCase().includes(searchText.toLowerCase()));

      setDisplayProducts(matchedProducts);
  }

  const handleStudentDelete = (_id) =>{
     
    const url=`https://peaceful-spire-22388.herokuapp.com/student/${_id}`
    fetch(url, {
      method:'DELETE',
    
    })
    .then(res => res.json())
    .then(data=>{
      if(data.deletedCount>0){
       
        alert('delete')
     
        const remaining = students?.filter(staff => staff._id !== _id)
        
        setDisplayProducts(remaining)
      }
    })
  }
    return (
        <div>
            <div style={{marginTop:'10px'}}>
            <div style={{display:'flex' , alignItems:'center' , justifyContent:"space-between"}}>
            <div className="search-container">
                <input
                style={{width:'400px'}}
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Student By Roll" />
                    
            </div>
            <div>
                <AddStudent call={call}></AddStudent>
                    </div>
                </div>
            </div>
          
       <div>
       <div class="table-users">
   <div class="header">Students</div>
   
   <table cellspacing="0">
      <tr>
         <th>Picture</th>
         <th>Name</th>
         <th>Father Name</th>
         <th>Mother Name</th>
         <th>Registration No</th>
         <th>Roll No</th>
         <th>Session</th>
         <th>Action</th>
      </tr>
      

{displayProducts?.map((item, i) => {
        return <tr key={i} >
          <td>{<img
                style={{ width: '50px', height: '50px' }}
                src='https://wsmde.edu.in/images/course/Nursing.png' alt="" />}</td>
            <td>{item.name}</td>
            <td>{item.fatherName}</td>
            <td>{item.motherName}</td>
            <td>{item.regNo}</td>
            <td>{item.roll}</td>
            <td>{item.sessionStart}-{item.sessionEnd}</td>
            
            <td style={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>

            <Button style={{backgroundColor:'red' , color:'white' , margin:'2px'}} size="small" onClick={()=>handleStudentDelete(item._id)}>Delete</Button>
            <Button style={{backgroundColor:'green' , color:'white' , margin:'2px'}} size="small" onClick={()=>handleStaffEdit(item._id)}>Edit</Button>
            </td>
            
        </tr>;
        })
    }

     
       </table>
</div>
<div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                        .map(number => <button
                            className={page=== number ? 'selected': ''}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)
                    }
                    
                    <select onChange={e => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
       </div>


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