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
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
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
            
          {/* <h1>{student.name}</h1>
          <Button >Edit </Button> <Button > Delete</Button> */}
        <Card sx={CARD_PROPERTY}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "left",
                  
                  p: 2
                }}
              >
              <div style={{padding:'20px'}}> <img style={{width:'100%' , height:'230px' , borderRadius:'50%'}} src={`data:image/png;base64,${student.image}`}alt="" srcset="" />
              </div>
                
                
              <div style={{textAlign:'left' , padding:'10px'}}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Name :{student.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Course: {student.course}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Category :{student.category}
                </Typography>
              </div>
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Button style={{backgroundColor:'green' , color:'white' , margin:'2px'}} size="small"  onClick={()=>handleStudentEdit(student._id)} variant="text">Edit</Button>
                <Button style={{backgroundColor:'red' , color:'white' , margin:'2px'}} size="small"  onClick={()=>handleStudentDelete(student._id)} variant="text">
                  Delete
                </Button>
              </CardContent>
            </Card>
        </div>
    );
};

