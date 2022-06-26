import React, { useState } from 'react';
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

    return (
        <div>
        <Navbar></Navbar>
        <GeneralStaff></GeneralStaff>
       
      <div>
      <div className="menuStaff">
          <p style={{marginRight:'10px'}} className={menuTab === 'a' ? "active_menu_tab" : "menu_tab"} onClick={() => handleMenuTabs('a')}>Adminastrator</p>
          <p style={{marginRight:'10px'}} className={menuTab === 't' ? "active_menu_tab" : "menu_tab"} onClick={() => handleMenuTabs('t')}>Teacher</p>
          <p className={menuTab === 'o' ? "active_menu_tab" : "menu_tab"} onClick={() => handleMenuTabs('o')}>Other</p>
      </div>
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