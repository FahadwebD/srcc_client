import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';





export default function AllCourses({courses ,handleEdit ,handleDelete}) {
    


    return (
        <div >
            
            <table id="customers">
  <tr>
    <th>Image</th>
    <th>CourseName</th>
    <th>Duration</th>
    <th>Sit</th>
    
    <th>Action</th>
    
    
  </tr>
  {courses.map((item, i) => {
        return <tr key={i} >
          <td>{<img
                style={{ width: '100px', height: '90px' }}
                src={`data:image/png;base64,${item.image}`} alt="" />}</td>
            <td>{item.courseName}</td>
            <td>{item.duration}</td>
            <td>{item.sit}</td>
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

