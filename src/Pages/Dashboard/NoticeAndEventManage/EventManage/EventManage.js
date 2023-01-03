import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import useNotice from '../../../../hooks/useNotice'

import loading from '../../../../assets/images/Loading-Image-1-1.gif'

import AddEvent from './AddEvent';
import EventTable from './EventTable';
import useEvent from '../../../../hooks/useEvent';


const EventManage = () => {

  

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


    const [staffs , setStaffs] = useEvent([]);
    
    const [open, setOpen] = React.useState(false);

    const [form, setForm] = useState({
      _id:"",
      image:"",
      headline: "",
      date: "",
      description: "",
      records: [],
    });





    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




 


 const handleStaffEdit = (_id) =>{

    console.log(_id)
const found = staffs.find(obj => {
    return obj._id ===_id;
  });

  setForm(found)
    handleOpen()
 }


 function updateForm(value) {
  return setForm((prev) => {
    return { ...prev, ...value };
  });
}
const call=() =>{
  fetch('https://serversrcnc-production.up.railway.app/event')
  .then(res=>res.json())
  .then(data=>setStaffs(data.reverse()))
}

    const handleStaffSubmit = e => {
       
       
        const updateStaff = {
            headline:form.headline,
            date:form.date,
            description:form.description,
            
            _id:form._id
            
        }
       console.log(updateStaff)
   
       fetch('https://serversrcnc-production.up.railway.app/event/edit', {
           method: 'PUT',
          
           headers: {
              //  authorization: `Bearer ${localStorage.getItem('accessToken')}`,
               'content-type': 'application/json'
           },
           body: JSON.stringify(updateStaff)
       })
           .then(res => res.json())
           .then(data => {
               if (data.modifiedCount) {
                  alert('Event Updated')
                  call()
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
                     <h1>ALL EVENTS</h1>
                </div>
                <div>
                <AddEvent call={call}></AddEvent>
                </div>
            </div>
          {staffs.length?<div>
            
            <EventTable staffs={staffs}
             setStaffs={setStaffs}
             handleStaffEdit={handleStaffEdit}></EventTable>
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
           Update Event
          </Typography>
          <form onSubmit={handleStaffSubmit} style={{ maxWidth:'400px',margin:'30px 30px 30px 30px'}}>
                      
          <div >
          <div>
                <img
                style={{ width: '100%', height: '120px' }}
                src={`data:image/png;base64,${form?.image}`} alt="" />
                
                  
                </div>
                         <div>
                         <TextField
                            required
                            label="Headline"
                            variant='standard'
                            id="outlined-size-small"
                            name="Name"
                            style={{ width: '100%' }}
                         
                            value={form.headline}
                            onChange={(e) => updateForm({ headline: e.target.value })}
                            
                        />
                         <TextField
                            required
                            label="Date"
                            variant='standard'
                            id="outlined-size-small"
                            name="Designation"
                            style={{ width: '100%' }}
                            
                            value={form.date}
                            onChange={(e) => updateForm({ date: e.target.value })}
                          
                            
                        />
                         <TextField
                            required
                            label="Description"
                            variant='standard'
                            id="outlined-size-small"
                            name="Category"
                            style={{ width: '100%' }}
                            value={form.description}
                            onChange={(e) => updateForm({ description: e.target.value })}
                            
                          
                            
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

export default EventManage;