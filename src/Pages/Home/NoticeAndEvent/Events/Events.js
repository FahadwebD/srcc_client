import React from 'react';
import useEvent from '../../../../hooks/useEvent';
import Event from './Event';
import './ev.css'
import ShareSocial from './ShareSocial';
const Events = () => {
    const [staffs] = useEvent()
    console.log(staffs)
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        <div style={{marginTop:'30px'}}>
            <h1>Upcoming And Recent Events</h1>
            <hr style={{width:'10%' , backgroundColor:'red' , border: '1px solid red'}} />
            <div className='gridEv'>
          {staffs?.map(ev =><Event
          key={ev._id}
          ev={ev}
          handleOpen={handleOpen}
          ></Event>)}
            </div>
            <div>
            <div>
     <ShareSocial 
          open={open}
          handleClose={handleClose}
        
         ></ShareSocial>
     </div>
            </div>
        </div>
    );
};

export default Events;