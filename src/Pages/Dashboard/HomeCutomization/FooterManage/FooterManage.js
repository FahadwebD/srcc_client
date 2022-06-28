
import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';



const FooterManage = () => {
    
  const [footInfo , setFootInfo] = React.useState('')


  React.useEffect(() =>{

    fetch('https://peaceful-spire-22388.herokuapp.com/footerInfo')
    .then(res=>res.json())
    .then(data=>setFootInfo(data))
  }, []);


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



const [editStaff ,setEditStaff] = React.useState()
const [open, setOpen] = React.useState(false);
const [info , setInfo] = React.useState()





const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);




const handleInfoChange = (event) => {
    setInfo(event.target.value);
  };

  const handleStaffEdit = (_id) =>{

    console.log(_id)
const found = footInfo.find(obj => {
    return obj._id ===_id;
  });
  setEditStaff(found)
    handleOpen()
 }


 const handleStaffSubmit = e => {
  const _id = editStaff._id
 
  const updateStaff = {
      info,
      
      _id
      
  }
 console.log(updateStaff)

 fetch('https://peaceful-spire-22388.herokuapp.com/footerInfo/edit', {
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
            
             console.log('ok')
         }
     })



  e.preventDefault();
}
  console.log(footInfo)
    
    return (
        <div>
             <div style={{display:'flex' , justifyContent:'space-around', alignItems:'center'}}>
          <h4>Option </h4>
            <h4>Info</h4>
           <div>
           <h4>Action</h4>
           </div>
          </div>
        <div style={{display:'flex' , justifyContent:'space-around', alignItems:'center'}}>
        <h4>{footInfo[0]?.option}</h4>
          <h4>{footInfo[0]?.info}</h4>
          <Button onClick={()=>handleStaffEdit(footInfo[0]?._id)}>Update</Button>
        </div>
        <div style={{display:'flex' , justifyContent:'space-around', alignItems:'center'}}>
        <h4>{footInfo[1]?.option}</h4>
          <h4>{footInfo[1]?.info}</h4>
          <Button onClick={()=>handleStaffEdit(footInfo[1]?._id)}>Update</Button>
        </div>
        <div style={{display:'flex' , justifyContent:'space-around', alignItems:'center'}}>
        <h4>{footInfo[1]?.option}</h4>
          <h4>{footInfo[1]?.info}</h4>
          <Button onClick={()=>handleStaffEdit(footInfo[2]?._id)}>Update</Button>
        </div>







        <div>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Update Information Of {editStaff?.option}
          </Typography>
          <form onSubmit={handleStaffSubmit} style={{ maxWidth:'400px',margin:'30px 30px 30px 30px'}}>
                      
          <div >
          <div>
               
                
                  
                </div>
                         <div>
                         <TextField
                            required
                           
                            id="outlined-size-small"
                            name="Name"
                            style={{ width: '100%' }}
                            
                            defaultValue={editStaff?.info}
                            onChange={handleInfoChange}
                          
                            
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

export default FooterManage;