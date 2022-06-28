import React from 'react';
import useNotice from '../../../../hooks/useNotice';
import Notice from './Notice';

const Notices = () => {
    const [staffs , setStaffs] = useNotice([]);
    return (
        <div style={{marginTop:'30px'}}>
            <div style={{height:'420px' , overflowY:'scroll'}}>
            {staffs?.map(note => <Notice
            
            key={note._id}
            note={note}
            ></Notice>)}
            </div>
        </div>
    );
};

export default Notices;