import { Avatar, Box, Card, CardContent, Typography } from '@material-ui/core';
import { Button } from '@mui/material';
import React from 'react';



export default function StudentTable({student , students, setDisplayProducts ,handleStudentEdit}) {
    

  const CARD_PROPERTY = {
    borderRadius: 5,
    boxShadow: 10,
  };


    const handleStudentDelete = (_id) =>{
     
        const url=`https://peaceful-spire-22388.herokuapp.com/student/${_id}`
        fetch(url, {
          method:'DELETE',
        
        })
        .then(res => res.json())
        .then(data=>{
          if(data.deletedCount>0){
           
            alert('delete')
         
            const remaining = students?.filter(staff => staff._id !== _id)
            
            setDisplayProducts(remaining)
          }
        })
      }
    return (
        <div>
             
         <td><img src="https://i.picsum.photos/id/1005/100/100.jpg" alt="" /></td>
         <td>Jane Doe</td>
         <td>jane.doe@foo.com</td>
         <td>01 800 2000</td>
         <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </td>
      

         
        </div>
    );
};

//  {/* <h1>{student.name}</h1>
//           <Button >Edit </Button> <Button > Delete</Button> */}
//           <Card sx={CARD_PROPERTY}>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               textAlign: "left",
              
//               p: 2
//             }}
//           >
//          <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
//          <div style={{padding:'0px'}}> <img style={{width:'90%' , height:'70%' , borderRadius:'50%'}} src={`data:image/png;base64,${student.image}`}alt="" srcset="" />
//           </div>
            
            
//           <div style={{textAlign:'left' , padding:'0px' , width:'500px'}}>
//           <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//             Name :{student.name}
//             </Typography>
//             <Typography variant="body1" color="text.secondary">
//               Course: {student.course}
//             </Typography>
//             <Typography variant="body1" color="text.secondary">
//               Category :{student.category}
//             </Typography>
//             <CardContent style={{display:'flex' ,justifyContent:'center' , alignItems:'center'}} sx={{ textAlign: "center" }}>
//             <Button style={{backgroundColor:'green' , color:'white' , margin:'2px'}} size="small"  onClick={()=>handleStudentEdit(student._id)} variant="text">Edit</Button>
//             <Button style={{backgroundColor:'red' , color:'white' , margin:'2px'}} size="small"  onClick={()=>handleStudentDelete(student._id)} variant="text">
//               Delete
//             </Button>
//           </CardContent>
//           </div>
//          </div>
//           </Box>
          
//         </Card>