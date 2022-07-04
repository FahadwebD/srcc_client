import React from 'react';
import OldNotices from './OldNotices';
import RecentNotice from './RecentNotice';

const AllNotices = ({notices}) => {
    //.slice(2)
    return (
        <div>
            
        {notices?.slice(0, 1).map(notice =><RecentNotice
        key={notice._id}
        notice={notice}
        ></RecentNotice>)}

<div className='oldNoticeContainer'>
            {notices?.slice(1).map(notice=> <OldNotices
             key={notice._id}
             notice={notice}
            
            ></OldNotices>)}
              </div>
        </div>
    );
};

export default AllNotices;