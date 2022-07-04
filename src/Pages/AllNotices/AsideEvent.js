import React from 'react';

const AsideEvent = ({event}) => {
    return (
         <div  className='asideC' style={{textAlign:'left' , margin:'10px'}}>
                <h4>{event.headline}</h4>
                <p>{event.description}</p>
            </div>
        
    );
};

export default AsideEvent;