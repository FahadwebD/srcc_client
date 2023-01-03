import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor:'white',
    border: '2px solid red',
    boxShadow: 24,
    p: 4,
  };





const NumbersCard = ({num}) => {
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [titles, setTitles] = React.useState();
    const [numbers, setNumber] = React.useState();

    const handleTitleChange = (event) => {
        setTitles(event.target.value);
      };
      const handleNumChange = (event) => {
        setNumber(event.target.value);
      };
    


      const handleServiceSubmit = e => {
        const _id = num._id
      
        const updateNumber = {
            titles,
            numbers,
            _id
            
        }
       console.log(updateNumber)
   
       fetch('https://serversrcnc.vercel.app/numbers/edit', {
           method: 'PUT',
           headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
               'content-type': 'application/json'
           },
           body: JSON.stringify(updateNumber)
       })
           .then(res => res.json())
           .then(data => {
               if (data.modifiedCount) {
                  alert('updated')
                   console.log('ok')
               }
           })

      

        e.preventDefault();
    }

    return (
        <div >
          <div style={{display:'flex' , justifyContent:'space-around', alignItems:'center'}}>
          <h1>{num.title} </h1>
            <h3>{num.numbers}</h3>
           <div>
           <Button style={{backgroundColor:'green' , color:'white'}} onClick={handleOpen}>Update</Button>
           </div>
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
           Update In Numbers
          </Typography>
          <form onSubmit={handleServiceSubmit} style={{ maxWidth:'400px',margin:'30px 30px 30px 30px'}}>
                      
                        <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="Time"
                           
                            
                            defaultValue={num.title}
                            onChange={handleTitleChange}
                          
                            size="small"
                        />
                         <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="Time"
                           
                            
                            defaultValue={num.number}
                            onChange={handleNumChange}
                          
                            size="small"
                        />
                      
                      
                      
                        <div style={{ textAlign:'right' , marginRight:'40px'}}><Button style={{backgroundColor:'red' }} type="submit" variant="contained">Update</Button></div>

                        </form>
        </Box>
      </Modal>
            </div>
        </div>
    );
};

export default NumbersCard;