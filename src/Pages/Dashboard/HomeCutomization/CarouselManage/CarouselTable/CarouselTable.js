import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useCarousel from '../../../../../hooks/useCarousel';
import AddCarouselData from '../AddCarouselData/AddCarouselData';
import CircularProgress from '@mui/material/CircularProgress';

import './CarouselStyle.css'


const CarouselTable = () => {
    



    const [carousel , setCarousel] = useCarousel();
  
   

    const handleDataDelete = (_id) =>{
     
        const url=`http://localhost:5000/banner/${_id}`
        fetch(url, {
          method:'DELETE'
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
    return (
        <div>
       {carousel.length?<div>
             <div style={{display:'flex', justifyContent:'space-between' , alignItems:'center'}}>
            <div>
            <h3>All Data</h3> 
            </div>
            <div>
            <AddCarouselData></AddCarouselData>
            </div>
        </div>
 


 <table id="customers">
  <tr>
  
    <th>Image</th>
    <th>Caption</th>
    <th>Action</th>
    
  </tr>
  {carousel.map((item, i) => {
        return <tr key={i} >
   
            <td><img
                style={{ width: '100%', height: '80px' }}
                src={`data:image/png;base64,${item.image}`} alt="" /></td>
            <td>{item.caption}</td>
            <td><Button size="small"  style={{backgroundColor:'red' , color:'white'}} onClick={()=>handleDataDelete(item._id)}>Delete </Button><Button size="small">Edit</Button></td>
            
        </tr>;
        })
    }
</table>
             </div>:<div>
             <CircularProgress color="secondary" />
             </div>}      
             
       
        </div>
    );
};

export default CarouselTable;