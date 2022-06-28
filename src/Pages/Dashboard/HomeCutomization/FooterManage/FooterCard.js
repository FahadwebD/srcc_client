import { Button } from '@mui/material';
import React from 'react';

const FooterCard = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [info, setInfo] = React.useState();



    const handleInfoChange = (event) => {
        setInfo(event.target.value);
      };
     
         const handleFooterSubmit = e => {
        const _id = 11
      
        const updateFooter = {
            
            info,
            _id
            
        }
       console.log(updateFooter)
   
    //    fetch('https://peaceful-spire-22388.herokuapp.com/numbers/edit', {
    //        method: 'PUT',
    //        headers: {
    //         authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    //            'content-type': 'application/json'
    //        },
    //        body: JSON.stringify(updateNumber)
    //    })
    //        .then(res => res.json())
    //        .then(data => {
    //            if (data.modifiedCount) {
                  
    //                console.log('ok')
    //            }
    //        })

      

        e.preventDefault();
    }
    return (
        <div>
             <div style={{display:'flex' , justifyContent:'space-around', alignItems:'center'}}>

           Under Construction
          </div>
            
        </div>
    );
};

export default FooterCard;