
import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
const NoticeDetail = () => {
    let { id } = useParams();
    const [eventsDetail , setEventsDetail] = useState({})
    useEffect(()=>{

        fetch(`https://serversrcnc-production-97a5.up.railway.app/notice/${id}`)
        .then(res=>res.json())
        .then(record => setEventsDetail(record));
       },[id])
      
    return (
        <div>
            <Navbar></Navbar>
            <div>
           
           <Container style={{marginTop:'240px'}}>
       <Card sx={{ maxWidth: '100%' , boxShadow:'none'}}>
     <CardActionArea>
       <CardMedia
         component="img"
         height="340"
         image={`data:image/png;base64,${eventsDetail?.image}`}
         alt="green iguana"
       />
       <CardContent style={{textAlign:'left'}}>
          
         <Typography gutterBottom variant="h5" component="div">
           {eventsDetail?.headline}
         </Typography>
         <small>Posted On {eventsDetail.date} By  <span>Sylhet Red Crescent Nursing College</span></small>
         <p  style={{ whiteSpace: 'pre-line'}}>
          {eventsDetail?.notice}
         </p>
       </CardContent>
     </CardActionArea>
   </Card>
   </Container>
           
       </div>
            <Footer></Footer>
        </div>
    );
};

export default NoticeDetail;