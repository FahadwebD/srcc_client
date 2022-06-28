import { Button } from '@material-ui/core';
import React from 'react';

const Notice = ({note}) => {
    return (
            <div style={{display:'flex' , flexDirection:'column' , textAlign:'start'}}>
                <h4 style={{marginBottom:'2px'}}>{note.headline}</h4>
                <small>Published: {note.date}</small>
                <div>
                <Button>Read More</Button>
                <hr/>
                </div>
            </div>
        
    );
};

export default Notice;