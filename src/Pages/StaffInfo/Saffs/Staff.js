import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import useStaff from '../../../hooks/useStaff';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import CarouselData from '../../Home/CaourselData/CarouselData';
import AllStaff from '../StaffProfile/AllStaff';
import GeneralStaff from '../StaffProfile/GeneralStaff';
import './staff.css'
const Staff = () => {
    const[staffs] = useStaff();
    const [menuTab, setMenuTab] = useState('a')




    const handleMenuTabs = (type) => {
        setMenuTab(type)
    }
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setMenuTab(event.target.value);
    };
    return (
        <div>
        <Navbar></Navbar>
        <GeneralStaff></GeneralStaff>
       
      <div>
      {/* <div className="menuStaff">
          <p style={{marginRight:'10px'}} className={menuTab === 'a' ? "active_menu_tab" : "menu_tab"} onClick={() => handleMenuTabs('a')}>Adminastrator</p>
          <p style={{marginRight:'10px'}} className={menuTab === 't' ? "active_menu_tab" : "menu_tab"} onClick={() => handleMenuTabs('t')}>Teacher</p>
          <p className={menuTab === 'o' ? "active_menu_tab" : "menu_tab"} onClick={() => handleMenuTabs('o')}>Other</p>
      </div> */}
      <FormControl sx={{ m: 1, minWidth: 120 }} error>
        <Select
          value={menuTab}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
        
          <MenuItem value={'a'}>Adminastrator</MenuItem>
          <MenuItem value={'t'}>Teacher</MenuItem>
          <MenuItem value={'o'}>Other</MenuItem>
        </Select>
        <FormHelperText>Category</FormHelperText>
      </FormControl>
      </div>
       <div className='gridStaff'>
       {staffs?.filter((staff) => menuTab === staff.categoryStaff)?.map(staff => <AllStaff key={staff._id} 
        {...staff}></AllStaff>)}
       </div>
        
        <Footer></Footer>
        </div>
    );
};

export default Staff;