import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';



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





const NumbersCard = ({num}) => {
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [titles, setTitles] = React.useState();
    const [number, setNumber] = React.useState();

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
            number,
            _id
            
        }
       console.log(updateNumber)
   
       fetch('http://localhost:5000/numbers/edit', {
           method: 'PUT',
           headers: {
               
               'content-type': 'application/json'
           },
           body: JSON.stringify(updateNumber)
       })
           .then(res => res.json())
           .then(data => {
               if (data.modifiedCount) {
                  
                   console.log('ok')
               }
           })

      

        e.preventDefault();
    }

    return (
        <div>
            <h1>{num.title} <Button style={{backgroundColor:'green' , color:'white'}} onClick={handleOpen}>Update</Button> </h1>
            <div>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <form onSubmit={handleServiceSubmit} style={{ maxWidth:'400px',margin:'30px 30px 30px 30px'}}>
                      
                        <TextField
                            required
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="Time"
                           
                            
                            defaultValue={num.title}
                            onBlur={handleTitleChange}
                          
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
                      
                      
                      
                        <div style={{ textAlign:'right' , marginRight:'40px'}}><Button style={{backgroundColor:'#5CE7ED' }} type="submit" variant="contained">Send</Button></div>

                        </form>
        </Box>
      </Modal>
            </div>
        </div>
    );
};

export default NumbersCard;