import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { Head } from 'react-static';
import Footer from '../../../../Shared/Footer/Footer';
import Navbar from '../../../../Shared/Navbar/Navbar';
const EventDetails = () => {

    const [eventsDetail , setEventsDetail] = useState({})
    let { id } = useParams();
   
    fetch(`https://peaceful-spire-22388.herokuapp.com/event/${id}`)
    .then(res=>res.json())
    .then(record => setEventsDetail(record));



    

    
    return (
        <div>
           <head>
           <meta property="fb:app_id"          content="1234567890" /> 
            <meta property="og:url" content={`https://srcn-college.web.app/evdetail/${id}`} />
            <meta property="og:type" content="article"/>
      
        <meta property="og:title"           content="Introducing our New Site" /> 
    <meta property="og:image"           content="https://scontent-sea1-1.xx.fbcdn.net/hphotos-xap1/t39.2178-6/851565_496755187057665_544240989_n.jpg" /> 
    <meta property="og:description"    content="http://samples.ogp.me/390580850990722" />
      
      
      </head>
            <Navbar></Navbar>

            <div>
           
            <Container style={{marginTop:'160px'}}>
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
           {eventsDetail?.description}
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

export default EventDetails;