import React, { useEffect, useState } from 'react';
import StaffTable from './StaffTable';
import AddStaff from './AddStaff'
import useStaff from '../../../hooks/useStaff';
import loading from '../../../assets/images/Loading-Image-1-1.gif'
const StaffManage = () => {

    const [staffs , setStaffs] = useStaff([]);

 

    console.log(staffs)
     
    return (
        <div style={{marginTop:'50px'}}>
            <div style={{display:'flex' , alignItems:'center' , justifyContent:"space-between"}}>
                <div>
                     <h1>ALL STAFF</h1>
                </div>
                <div>
                <AddStaff></AddStaff>
                </div>
            </div>
          {staffs.length?<div>
            
            <StaffTable staffs={staffs} setStaffs={setStaffs}></StaffTable>
            </div>:<div>
                <img src={loading} alt="" srcset="" />
            </div>}  
            
        </div>
    );
};

export default StaffManage;