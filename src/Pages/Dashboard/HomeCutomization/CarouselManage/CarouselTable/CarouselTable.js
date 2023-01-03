import { Button, Input } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useCarousel from '../../../../../hooks/useCarousel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

import './CarouselStyle.css'


const CarouselTable = ({item , call , setCarousel , carousel}) => {
    



    
    const [open, setOpen] = React.useState(false);
    const [caption, setCaption] = React.useState();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
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
   



    const handleCaptionChange = (event) => {
      setCaption(event.target.value);
    };

    const handleDataDelete = (_id) =>{
     
        const url=`https://serversrcnc-production.up.railway.app/banner/${_id}`
        fetch(url, {
          
          method:'DELETE',
       
        })
        .then(res => res.json())
        .then(data=>{
          if(data.deletedCount>0){
           
            alert('delete')
         
            const remaining = carousel?.filter(caro => caro._id !== _id)
            
            setCarousel(remaining)
          }
        })
      }



      const handleCarouselSubmit = e => {
        const _id = item._id
       
        const updateCarousel = {
            caption,
           
            _id
            
        }
       console.log(updateCarousel)
   
       fetch('https://serversrcnc-production.up.railway.app/banner/edit', {
           method: 'PUT',
           headers: {
           
               'content-type': 'application/json'
           },
           body: JSON.stringify(updateCarousel)
       })
           .then(res => res.json())
           .then(data => {
               if (data.modifiedCount) {
                call()
                alert('Updated Carousel')
                handleClose()
                   console.log('ok')
               }
           })

      

        e.preventDefault();
    }
    return (
        <div>
       
            
 
   
           <div style={{display:'flex' ,justifyContent:'space-between'}}>
           <div><img
                style={{ width: '200px', height: '80px' }}
                src={`data:image/png;base64,${item.image}`} alt="" /></div>
            <div><h3>{item.caption}</h3></div>
            <div ><Button size="small"  style={{backgroundColor:'red' , color:'white' , margin:'2px'}} onClick={()=>handleDataDelete(item._id)}>Delete </Button><Button style={{backgroundColor:'green' , color:'white' , margin:'2px'}} size="small"  onClick={handleOpen}>Edit</Button></div> 
            
            </div>    
            <hr/>  
       

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
          <form onSubmit={handleCarouselSubmit} style={{ maxWidth:'400px',margin:'30px 30px 30px 30px'}}>
                      
          <div >
          <div>
                <img
                style={{ width: '100%', height: '120px' }}
                src={`data:image/png;base64,${item.image}`} alt="" />
                
                  
                </div>
                         <div>
                         <TextField
                            required
                           
                            id="outlined-size-small"
                            name="Time"
                            style={{ width: '100%' }}
                            
                            defaultValue={item.caption}
                            onChange={handleCaptionChange}
                          
                            multiline
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

export default CarouselTable;