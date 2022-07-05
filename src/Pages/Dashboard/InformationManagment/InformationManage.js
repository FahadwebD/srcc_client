import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, InputLabel, TextField } from '@mui/material';
import useInfo from '../../../hooks/useInfo';
import AddInformation from './AddInformation';
import Infromation from './Infromation';






const InformationManage = () => {

    const [information , setInformation ] = useInfo()




    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
       
        boxShadow: 24,
        p: 4,
        height:500 ,
        overflowY:'scroll'
      };


  
    const [open, setOpen] = React.useState(false);
    const [id, setId] =useState()
    const [form, setForm] = useState({
      _id:"",
  
      course: "",
  
      session:"",
      maleGenaral: "",
      malePoor: "",
      femaleGenaral: "",
      femalePoor:"",
      numbers:"",
      enrolled:"",
      records: [],
    });

   


    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setForm({})
      setOpen(false)};


   

  
console.log(information)
   


const callUse= () =>{


    fetch('https://peaceful-spire-22388.herokuapp.com/info')
    .then(res=>res.json())
    .then(data=>setInformation(data.reverse()))


}

 const handleEdit = (_id) =>{
  

    
  fetch(`https://peaceful-spire-22388.herokuapp.com/info/${_id}`)
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
   
        session: form.session,
        maleGenaral: form.maleGenaral,
        malePoor: form.malePoor,

        femaleGenaral: form.femaleGenaral,


        femalePoor: form.femalePoor,

        numbers: form.numbers,

        enrolled: form.enrolled,
        course: form.course,
      
      };
       fetch(`https://peaceful-spire-22388.herokuapp.com/info/edit/${id}`, {
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
                   alert('Information Edited')
                   handleClose()
                   callUse()
                   console.log('ok')
               }
           })

      

        e.preventDefault();
    }
    console.log(information)
     


    const handleDelete = (_id) =>{
     
  
         fetch(`https://peaceful-spire-22388.herokuapp.com/info/${_id}`, {
           method:'DELETE',
         //   headers: {
         //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
         // },
         })
         .then(res => res.json())
         .then(data=>{
           if(data.deletedCount>0){
            
             alert('delete')
          
             const remaining = information?.filter(staff => staff._id !== _id)
             
             setInformation(remaining)
           }
         })
       }
  
  



















    return (
        <div style={{marginTop:'50px'}}>
            <div style={{display:'flex' , alignItems:'center' , justifyContent:"space-between"}}>
                <div>
                     <h1>ALL Information</h1>
                </div>
                <div>
                <AddInformation
                callUse={callUse}
                ></AddInformation>
                </div>
            </div>
          {information.length?<div>
            
            <Infromation  information={information}
             setInformation={setInformation}
             handleEdit={handleEdit}
             handleDelete={handleDelete}>
              
             </Infromation>
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
           Update Notice
          </Typography>
          <form onSubmit={handlenoticesubmit} style={{ maxWidth:'400px',margin:'30px 30px 30px 30px'}}>
                      
          
                
          <div >
         
                         <div>
                         <InputLabel shrink htmlFor="bootstrap-input">
                           Course Name
        </InputLabel>
                         <TextField
                            variant="standard"
                          
                         
                            id="outlined-size-small"
                            name="Name"
                            style={{ width: '100%' }}
                            value={form.course}
                            disabled
                            onChange={(e) => updateForm({ course: e.target.value })}
                           
                         
                            
                        />
                     
                         
                         </div>
                         <div>
                         <InputLabel shrink htmlFor="bootstrap-input">
                           Session
        </InputLabel>
                         <TextField
                            variant="standard"
                          
                         
                            id="outlined-size-small"
                            name="Headline"
                            style={{ width: '100%' }}
                            value={form.session}
                            onChange={(e) => updateForm({ session: e.target.value })}
                           
                         
                            
                        />
                         <br/>
                         <br/>
                         <InputLabel shrink htmlFor="bootstrap-input">
                           Male Genaral
        </InputLabel>
                         <TextField
                          
                            variant="standard"
                            id="outlined-size-small"
                            name="Category"
                            style={{ width: '100%' }}
                            
                            multiline
                             maxRows={1000}
                            value={form.maleGenaral}
                            onChange={(e) => updateForm({ maleGenaral: e.target.value })}
                          
                            
                        />
                        <InputLabel shrink htmlFor="bootstrap-input">
                           Male Poor
        </InputLabel>
                         <TextField
                          
                          variant="standard"
                          id="outlined-size-small"
                          name="Category"
                          style={{ width: '100%' }}
                          
                          multiline
                           maxRows={1000}
                          value={form.malePoor}
                          onChange={(e) => updateForm({ malePoor: e.target.value })}
                        
                          
                      />

<InputLabel shrink htmlFor="bootstrap-input">
                           Female General
        </InputLabel>
                        <TextField
                          
                          variant="standard"
                          id="outlined-size-small"
                          name="Category"
                          style={{ width: '100%' }}
                          
                          multiline
                           maxRows={1000}
                          value={form.femaleGenaral}
                          onChange={(e) => updateForm({ femaleGenaral: e.target.value })}
                        
                          
                      />
                      <InputLabel shrink htmlFor="bootstrap-input">
                           Female Poor
        </InputLabel>
                            <TextField
                          
                          variant="standard"
                          id="outlined-size-small"
                          name="Category"
                          style={{ width: '100%' }}
                          
                          multiline
                           maxRows={1000}
                          value={form.femaleGenaral}
                          onChange={(e) => updateForm({ femaleGenaral: e.target.value })}
                        
                          
                      />
                      <InputLabel shrink htmlFor="bootstrap-input">
                          Numbers
        </InputLabel>
                          <TextField
                          
                          variant="standard"
                          id="outlined-size-small"
                          name="Category"
                          style={{ width: '100%' }}
                          
                          multiline
                           maxRows={1000}
                          value={form.numbers}
                          onChange={(e) => updateForm({ numbers: e.target.value })}
                        
                          
                      />
                      <InputLabel shrink htmlFor="bootstrap-input">
                          Enrolled
        </InputLabel>
                        <TextField
                          
                          variant="standard"
                          id="outlined-size-small"
                          name="Category"
                          style={{ width: '100%' }}
                          
                          multiline
                           maxRows={1000}
                          value={form.enrolled}
                          onChange={(e) => updateForm({ enrolled: e.target.value })}
                        
                          
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

export default InformationManage;