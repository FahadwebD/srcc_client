import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, MenuItem, TextField } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import StaffTable from './StaffTable';
import AddStaff from './AddStaff'
import useStaff from '../../../hooks/useStaff';
import loading from '../../../assets/images/Loading-Image-1-1.gif'



const StaffManage = () => {

  

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        
      };


    const [staffs , setStaffs] = useStaff([]);
    
    const [open, setOpen] = React.useState(false);
    
    const [id, setId] =useState()
    const [form, setForm] = useState({
      _id:"",
      image:"",
      name: "",
      categoryStaff: "",
      designation: "",
      mobile:"",
      rank:"",
      speech:"",
      records: [],
    });



    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setForm({})
      setOpen(false)};


      const callUse= () =>{


        fetch('https://peaceful-spire-22388.herokuapp.com/staff')
        .then(res=>res.json())
        .then(data=>setStaffs(data.reverse()))
    
    
    }


      function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }

      const handleEdit = (_id) =>{
  

    
        fetch(`http://localhost:5000/staff/${_id}`)
        .then(res=>res.json())
        .then(record => {
          setForm(record)
        setId(record._id)})
      
      
       
          handleOpen()
      
      
      
       }


 
    const handleStaffSubmit = e => {
       
       
        const updateStaff = {
            name:form.name,
            designation:form.designation,
            categoryStaff:form.categoryStaff,
            mobile:form.mobile,
            rank:form.rank,
            speech:form.speech
            
        }
      
   
       fetch(`http://localhost:5000/staff/edit/${id}`, {
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
                callUse()
                   console.log('ok')
               }
           })

      

        e.preventDefault();
    }
    console.log(staffs)


    const handleDelete = (_id) =>{
     
      const url=`http://localhost:5000/staff/${_id}`
      fetch(url, {
        method:'DELETE',
      
      })
      .then(res => res.json())
      .then(data=>{
        if(data.deletedCount>0){
         
          alert('delete')
       
          const remaining = staffs?.filter(staff => staff._id !== _id)
          
          setStaffs(remaining)
        }
      })
    }


    return (
        <div style={{marginTop:'50px'}}>
            <div style={{display:'flex' , alignItems:'center' , justifyContent:"space-between"}}>
                <div>
                     <h1>ALL STAFF</h1>
                </div>
                <div>
            <AddStaff callUse={callUse}></AddStaff>
                </div>
            </div>
          {staffs.length?<div>
            
            <StaffTable staffs={staffs}
             setStaffs={setStaffs}
             handleDelete={handleDelete}
             callUse={callUse}
             handleEdit={handleEdit}></StaffTable>
            </div>:<div>
                <img src={loading} alt="" srcset="" />
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
           Update Staff Profile
          </Typography>
          <form onSubmit={handleStaffSubmit} >
                      
          <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}} >
          <div>
                <img
                style={{ width: '200px', height: '250px' }}
                src={`data:image/png;base64,${form.image}`} alt="" />
                
                  
                </div>
                         <div>
                         <div>
                         <TextField
                            variant="standard"
                            required
                            label="Name"
                            id="outlined-size-small"
                            name="Name"
                            style={{ width: '40%' , margin:'10px' }}
                            value={form.name}
                            onChange={(e) => updateForm({ name: e.target.value })}
                           
                          
                            
                        />
                         <TextField
                            variant="standard"
                            required
                            label="Designation"
                            id="outlined-size-small"
                            name="Designation"
                            style={{ width: '40%' , margin:'10px'}}
                            value={form.designation}
                            onChange={(e) => updateForm({ designation: e.target.value })}
                           
                          
                            
                        />
                         </div>
                      
                          
                            <TextField
          variant="standard"
          sx={{ width: '40%',  margin:'10px !important' , padding:'10px !important'}}
          id="outlined-size-small"
          required
          select
          label=" Categories"
        
          value={form.categoryStaff}
      onChange={(e) => updateForm({ categoryStaff: e.target.value })}
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
        <TextField
          variant="standard"
          sx={{ width: '40%',  margin:'10px !important' , padding:'10px !important'}}
          id="outlined-size-small"
          required
          select
          label="Ranking"
        
          value={form.rank}
      onChange={(e) => updateForm({ rank: e.target.value })}
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
                      
                         <TextField
                            variant="standard"
                            required
                            label="Mobile"
                            id="outlined-size-small"
                            name="Name"
                            style={{ width: '40%' , margin:'10px'}}
                            
                            
                            value={form.mobile}
                            onChange={(e) => updateForm({ mobile: e.target.value })}
                            
                        />
                         </div>
          </div>
          <TextField
                    style={{height:"200px" , overflowY:"scroll"}}
                    sx={{ width: '100%', m:1 }}
                    label="Speech"
                    required
                    multiline
                    maxRows={1000}
                    value={form.speech}
                    onChange={e => updateForm({ speech: e.target.value })}
                    variant="standard" />
                      
                      
                         
                        <div style={{ textAlign:'right' , marginRight:'40px'}}><Button style={{backgroundColor:'#5CE7ED' }} type="submit" variant="contained">Send</Button></div>

                        </form>
        </Box>
      </Modal>
            </div>
        </div>
    );
};

export default StaffManage;