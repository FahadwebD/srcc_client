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



    const openGraphData = {
      title: `${eventsDetail?.headline}`,
      description:
        `${eventsDetail?.description}`,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Open_Graph_protocol_logo.png',
    };
    return (
        <div>
            <Navbar></Navbar>

            <div>
            <Head>
        <meta property="og:title" content={openGraphData.title} />
        <meta property="og:description" content={openGraphData.description} />
        <meta property="og:url" content={openGraphData.url} />
        <meta property="og:image" content={openGraphData.image} />
        <meta name="twitter:card" content="summary" />
      </Head>
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