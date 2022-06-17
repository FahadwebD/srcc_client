import React, { useEffect, useState } from 'react';

import AddStudent from './AddStudent';
import StudentTable from './StudentTable';

const StudentManage = () => {

    const [staffs , setStaffs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/student')
        .then(res=>res.json())
        .then(data=>setStaffs(data))

    },[staffs])

    
     
    return (
        <div>
            <AddStudent></AddStudent>
            <StudentTable staffs={staffs} setStaffs={setStaffs}></StudentTable>
        </div>
    );
};

export default StudentManage;