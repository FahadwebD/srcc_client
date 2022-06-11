import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import CarouselData from '../../Home/CaourselData/CarouselData';
import AllStaff from '../StaffProfile/AllStaff';

const Staff = () => {
    return (
        <div>
        <Navbar></Navbar>
        <CarouselData></CarouselData>
        <AllStaff></AllStaff>
        <Footer></Footer>
        </div>
    );
};

export default Staff;