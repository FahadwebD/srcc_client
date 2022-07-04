import React from 'react';
import './NoticesLayout.css'
const RecentNotice = ({notice}) => {
    return (
        <div>
            
    <div className='recentN'>
    <div className='imgContainer' >
    <img style={{width:'100%',
    height:'200px'}} className='imga'  src={`data:image/png;base64,${notice?.image}`}  alt="" srcset="" />
</div>
<div className='descriptionContainer'>
    <span style={{fontSize:'10px' , color:'red' , margin:'0'}}>Date :{notice.date}</span>
    <h2>{notice.headline}</h2>
    <p>{notice.notice}</p>
</div>
    </div>
            
        </div>
    );
};

export default RecentNotice;