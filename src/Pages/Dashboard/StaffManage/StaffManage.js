import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';

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
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };


    const [staffs , setStaffs] = useStaff([]);
    const [editStaff ,setEditStaff] = useState()
    const [open, setOpen] = React.useState(false);
    const [name , setName] = useState()
    const [categoryStaff , setCategoryStaff] = useState()
    const [designation , setDesignation] = useState()
    const [mobile , setMobile] = useState()




    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    const handleNameChange = (event) => {
        setName(event.target.value);
      };
      const handleCatogoryChange = (event) => {
        setCategoryStaff(event.target.value);
      };
      const handleDesignationChange = (event) => {
        setDesignation(event.target.value);
      };
      const handleMobileChange = (event) => {
        setMobile(event.target.value);
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
            designation,
            categoryStaff,
            mobile,
            _id
            
        }
       console.log(updateStaff)
   
       fetch('http://localhost:5000/staff/edit', {
           method: 'PUT',
           headers: {
               
               'content-type': 'application/json'
           },
           body: JSON.stringify(updateStaff)
       })
           .then(res => res.json())
           .then(data => {
               if (data.modifiedCount) {
                  
                   console.log('ok')
               }
           })

      

        e.preventDefault();
    }
    console.log(staffs)
     
    return (
        <div style={{marginTop:'50px'}}>
            <div style={{display:'flex' , alignItems:'center' , justifyContent:"space-between"}}>
                <div>
                     <h1>ALL STAFF</h1>
                </div>
                <div>
                <AddStaff></AddStaff>
                </div>
            </div>
          {staffs.length?<div>
            
            <StaffTable staffs={staffs}
             setStaffs={setStaffs}
             handleStaffEdit={handleStaffEdit}></StaffTable>
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
           Update Carousel
          </Typography>
          <form onSubmit={handleStaffSubmit} style={{ maxWidth:'400px',margin:'30px 30px 30px 30px'}}>
                      
          <div >
          <div>
                <img
                style={{ width: '100%', height: '120px' }}
                src={`data:image/png;base64,${editStaff?.image}`} alt="" />
                
                  
                </div>
                         <div>
                         <TextField
                            required
                           
                            id="outlined-size-small"
                            name="Name"
                            style={{ width: '100%' }}
                            
                            defaultValue={editStaff?.name}
                            onChange={handleNameChange}
                          
                            
                        />
                         <TextField
                            required
                           
                            id="outlined-size-small"
                            name="Designation"
                            style={{ width: '100%' }}
                            
                            defaultValue={editStaff?.designation}
                            onChange={handleCatogoryChange}
                          
                            
                        />
                         <TextField
                            required
                           
                            id="outlined-size-small"
                            name="Category"
                            style={{ width: '100%' }}
                            
                            defaultValue={editStaff?.categoryStaff}
                            onChange={handleDesignationChange}
                          
                            
                        />
                         <TextField
                            required
                           
                            id="outlined-size-small"
                            name="Name"
                            style={{ width: '100%' }}
                            
                            defaultValue={editStaff?.mobile}
                            onChange={handleMobileChange}
                          
                            
                        />
                         </div>
          </div>
                      
                      
                      
                         
                        <div style={{ textAlign:'right' , marginRight:'40px'}}><Button style={{backgroundColor:'#5CE7ED' }} type="submit" variant="contained">Send</Button></div>

                        </form>
        </Box>
      </Modal>
            </div>
        </div>
    );
};

export default StaffManage;