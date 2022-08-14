import React from 'react';
import useEvent from '../../../../hooks/useEvent';
import Event from './Event';
import './ev.css'
const Events = () => {
    const [staffs] = useEvent()
    console.log(staffs)

    return (
        <div style={{marginTop:'30px'}}>
            <h1>Upcoming And Recent Events</h1>
            <hr style={{width:'10%' , backgroundColor:'red' , border: '1px solid red'}} />
            <div className='gridEv'>
          {staffs?.map(ev =><Event
          key={ev._id}
          ev={ev}
      
          ></Event>)}
            </div>
            <div>
            <div>
    
     </div>
            </div>
        </div>
    );
};

export default Events;