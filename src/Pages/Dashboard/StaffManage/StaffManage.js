import React, { useEffect, useState } from 'react';
import StaffTable from './StaffTable';
import AddStaff from './AddStaff'
import useStaff from '../../../hooks/useStaff';

const StaffManage = () => {

    const [staffs , setStaffs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/staff')
        .then(res=>res.json())
        .then(data=>setStaffs(data))

    },[staffs])

    
     
    return (
        <div>
            <AddStaff></AddStaff>
            <StaffTable staffs={staffs} setStaffs={setStaffs}></StaffTable>
        </div>
    );
};

export default StaffManage;