import { Box, Modal } from '@mui/material';
import React from 'react';



  import {
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
     LinkedinIcon,

    ViberIcon,

    EmailIcon,
  } from 'react-share';
import { Simplesharer } from 'simple-sharer';



const ShareSocial = ({open , handleClose ,headline , image , id}) => {


    const text = headline; 
    const uri = image?.replace(/^"+|"+$/g, '')
    console.log(uri)
 console.log(text)
     const sh = new Simplesharer()
    sh.url = `http://localhost:3000/evdetail/${id}` //your url
    sh.title = {text} //title for Reddit, this is optional
    sh.text = 'Passionate Mobile and Web Apps Development Team' // description for twitter, not more than a hundred characters, optional.
    sh.hashtags = ['buildbrothers', 'bb', 'software dev team'] // a list of hashtags for twitter,also optional
    return (
        <div>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='s'>
        <div className='gridIcon'>
        <button onClick={()=> sh.share('facebook') }>Share on Facebook</button>
        <button onClick={()=> sh.share('twitter') }>Share on Twitter</button>
        <button onClick={()=> sh.share('whatsapp') }>Share on Whatsapp</button>
        
        </div>
        </Box>
      </Modal>
        </div>
    );
};

export default ShareSocial;