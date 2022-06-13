import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import CarouselData from '../../Home/CaourselData/CarouselData';
import AllStaff from '../StaffProfile/AllStaff';
import GeneralStaff from '../StaffProfile/GeneralStaff';

const Staff = () => {
    return (
        <div>
        <Navbar></Navbar>
        <GeneralStaff></GeneralStaff>
        <AllStaff></AllStaff>
        <Footer></Footer>
        </div>
    );
};

export default Staff;