import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';





export default function Facilities({facilities ,handleEdit ,handleDelete}) {
    


    return (
        <div >
            
            <table id="customers">
  <tr>
    <th>Image</th>
    <th>Headline</th>
    <th>Date</th>
    <th>Facilities</th>
    
    <th>Action</th>
    
    
  </tr>
  {facilities.map((item, i) => {
        return <tr key={i} >
          <td>{<img
                style={{ width: '100px', height: '90px' }}
                src={`data:image/png;base64,${item.image}`} alt="" />}</td>
            <td>{item.headline}</td>
            <td>{item.date}</td>
            <td>{item.facilities}</td>
            <td>

            <Button style={{backgroundColor:'red' , color:'white' , margin:'2px'}} size="small" onClick={()=>handleDelete(item._id)}>Delete</Button>
            <Button style={{backgroundColor:'green' , color:'white' , margin:'2px'}} size="small" onClick={()=>handleEdit(item._id)}>Edit</Button>
            </td>
            
        </tr>;
        })
    }
</table>
       
        </div>
    );
};

