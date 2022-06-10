import React from 'react';
import Event from './Event';

const Events = () => {
    return (
        <div style={{marginTop:'30px'}}>
            <h1>Upcoming And Recent Events</h1>
            <hr style={{width:'10%' , backgroundColor:'red' , border: '1px solid red'}} />
            <Event></Event>
        </div>
    );
};

export default Events;