import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useParams } from "react-router-dom";
import useStaff from '../../../hooks/useStaff';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';

import AllStaff from '../StaffProfile/AllStaff';
import GeneralStaff from '../StaffProfile/GeneralStaff';
import './staff.css'
const Staff = () => {
    const[staffs] = useStaff();
  
   let {c} = useParams()
   console.log(c)



 
    return (
        <div>
        <Navbar></Navbar>
        <GeneralStaff c={c}></GeneralStaff>
       
      <div>

      
      </div>
       <div className='gridStaff'>
        {c == 'all'?staffs.map(staff=><AllStaff
        key={staff._id} 
        {...staff}
        ></AllStaff>):staffs?.filter((staff) => c === staff.categoryStaff)?.map(staff => <AllStaff key={staff._id} 
          {...staff}></AllStaff>)}
       
       </div>
        
        <Footer></Footer>
        </div>
    );
};

export default Staff;