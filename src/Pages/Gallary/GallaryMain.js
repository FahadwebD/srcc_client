import React from 'react';

import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Gallary from './Gallary';

import GallaryHeader from './GallaryHeader';


const GallaryMain = () => {
    return (
        <div>
            <Navbar></Navbar>
            <GallaryHeader></GallaryHeader>
             <Gallary></Gallary>
            <Footer></Footer>
        </div>
    );
};

export default GallaryMain;