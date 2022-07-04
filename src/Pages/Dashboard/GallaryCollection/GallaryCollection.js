import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Input, TextField } from '@mui/material';


import loading from '../../../assets/images/Loading-Image-1-1.gif'
import useGallary from '../../../hooks/useGallary';
import AddCollection from './AddCollection';
import CollectionTable from './CollectionTable';




const GallaryCollection = () => {

  

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


    const [staffs , setStaffs] = useGallary([]);
  
    const [open, setOpen] = React.useState(false);
  
    
    const [form, setForm] = useState({
      _id:"",
      image:"",
      title: "",
      records: [],
    });

    




    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);





     
      function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }
      const call=() =>{
        fetch('https://peaceful-spire-22388.herokuapp.com/gallary')
        .then(res=>res.json())
        .then(data=>setStaffs(data.reverse()))
      }

 const handleStaffEdit = (_id) =>{

    console.log(_id)
const found = staffs.find(obj => {
    return obj._id ===_id;
  });
  setForm(found)
    handleOpen()
 }
    const handleStaffSubmit = e => {
       
       
        const updatePhoto = {
          title:form.title,
                      
          _id:form._id
          
      }
     console.log(updatePhoto)
   
       fetch('https://peaceful-spire-22388.herokuapp.com/gallary/edit', {
           method: 'PUT',
          
           headers: {
              //  authorization: `Bearer ${localStorage.getItem('accessToken')}`,
               'content-type': 'application/json'
           },
           body: JSON.stringify(updatePhoto)
       })
           .then(res => res.json())
           .then(data => {
               if (data.modifiedCount) {
                  call()
                  alert('Updated Title')
                  handleClose()
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
                     <h1>ALL Collection Of Gallery</h1>
                </div>
                <div>
                <AddCollection call={call}></AddCollection>
                </div>
            </div>
          {staffs.length?<div>
            
            <CollectionTable staffs={staffs}
             setStaffs={setStaffs}
             handleStaffEdit={handleStaffEdit}></CollectionTable>
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
           Update Photo
          </Typography>
          <form onSubmit={handleStaffSubmit} style={{ maxWidth:'400px',margin:'30px 30px 30px 30px'}}>
                      
          <div >
          <div>
                <img
                style={{ width: '130px', height: '120px' }}
                src={`data:image/png;base64,${form?.image}`} alt="" />
                
                  
                </div>
                         <div>
                         
                         <TextField
                            required
                           
                            id="outlined-size-small"
                            name="Name"
                            style={{ width: '80%' }}
                            
                            value={form.title}
                            onChange={(e) => updateForm({ title: e.target.value })}
                          
                            
                        />
                      
                         
                         
                         </div>
          </div>
                      
                      
                      
                         
                        <div style={{ textAlign:'center' , marginRight:'70px'}}><Button style={{backgroundColor:'red' }} type="submit" variant="contained">Update</Button></div>

                        </form>
        </Box>
      </Modal>
            </div>
        </div>
    );
};

export default GallaryCollection;