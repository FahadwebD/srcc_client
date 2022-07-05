import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';





export default function Information({information ,handleEdit ,handleDelete}) {
    

console.log(information)
    return (
        <div  >
            

            <div id='students'>
            <table >

<thead>
<tr>
<th rowspan="3" >Course Name</th>
<th rowspan="3" >Session</th>
<th colspan="4" >Students Category</th>
<th rowspan="3" >Numbers </th>
<th rowspan="3" >Enrolled</th>
<th rowspan="3" >Action</th>

</tr>

<tr>
<th colspan="2" >male</th>
<th colspan="2" >Female</th>
</tr>

<tr>
<th>general</th>
<th>poor</th>
<th>general</th>
<th>poor</th>
</tr>
</thead>

<tbody>



  {information?.map((item, i) => {
        return <tr key={i} >
            <td>{item.course}</td>

            <td>{item.session}</td>
            <td>{item.maleGenaral}</td>
            <td>{item.malePoor}</td>
            <td>{item.femaleGenaral}</td>
            <td>{item.femalePoor}</td>

            

            <td>{item.numbers}</td>
            <td>{item.enrolled}</td>

            <td>

            <Button style={{backgroundColor:'red' , color:'white' , margin:'2px'}} size="small" onClick={()=>handleDelete(item._id)}>Delete</Button>
            <Button style={{backgroundColor:'green' , color:'white' , margin:'2px'}} size="small" onClick={()=>handleEdit(item._id)}>Edit</Button>
            </td>
            
        </tr>;
        })
    }
</tbody>

</table>
</div>
       
        </div>
    );
};

