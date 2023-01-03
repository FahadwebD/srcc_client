import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, InputLabel, TextField } from '@mui/material';


import AddNotice from './AddNotice'
import loading from '../../../../assets/images/Loading-Image-1-1.gif'
import NoticeTable from './NoticeTable'
import useNotice from '../../../../hooks/useNotice';


const NoticeManage = () => {

  

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


    const [notices , setNotices] = useNotice([]);
    const [open, setOpen] = React.useState(false);
    const [id, setId] =useState()
    const [form, setForm] = useState({
      _id:"",
      image:"",
      headline: "",
      date: "",
      notice: "",
      records: [],
    });

   


    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setForm({})
      setOpen(false)};


   

  

   


const callUse= () =>{


    fetch('https://serversrcnc-production.up.railway.app/notice')
    .then(res=>res.json())
    .then(data=>setNotices(data.reverse()))


}

 const handleEdit = (_id) =>{
  

    
  fetch(`https://serversrcnc-production.up.railway.app/notice/${_id}`)
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
   
        headline: form.headline,
        notice: form.notice,
      };
       fetch(`https://serversrcnc-production.up.railway.app/notice/edit/${id}`, {
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
    console.log(notices)
     


    const handleDelete = (_id) =>{
     
  
         fetch(`https://serversrcnc-production.up.railway.app/notice/${_id}`, {
           method:'DELETE',
         //   headers: {
         //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
         // },
         })
         .then(res => res.json())
         .then(data=>{
           if(data.deletedCount>0){
            
             alert('delete')
          
             const remaining = notices?.filter(staff => staff._id !== _id)
             
             setNotices(remaining)
           }
         })
       }
  
  



















    return (
        <div style={{marginTop:'50px'}}>
            <div style={{display:'flex' , alignItems:'center' , justifyContent:"space-between"}}>
                <div>
                     <h1>ALL Notice</h1>
                </div>
                <div>
                <AddNotice 
                callUse={callUse}
                ></AddNotice>
                </div>
            </div>
          {notices.length?<div>
            
            <NoticeTable notices={notices}
             setnotices={setNotices}
             handleEdit={handleEdit}
             handleDelete={handleDelete}>
              
             </NoticeTable>
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
           Update Notice
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
                           Headline
        </InputLabel>
                         <TextField
                            variant="standard"
                          
                         
                            id="outlined-size-small"
                            name="Headline"
                            style={{ width: '100%' }}
                            value={form.headline}
                            onChange={(e) => updateForm({ headline: e.target.value })}
                           
                         
                            
                        />
                         <br/>
                         <br/>
                         <InputLabel shrink htmlFor="bootstrap-input">
                           Notice
        </InputLabel>
                         <TextField
                          
                            variant="standard"
                            id="outlined-size-small"
                            name="Category"
                            style={{ width: '100%' }}
                            
                            multiline
                             maxRows={1000}
                            value={form.notice}
                            onChange={(e) => updateForm({ notice: e.target.value })}
                          
                            
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

export default NoticeManage;