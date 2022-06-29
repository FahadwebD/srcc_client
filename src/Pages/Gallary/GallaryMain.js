import React from 'react';
import useGallary from '../../hooks/useGallary';

import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Gallary from './Gallary';

import GallaryHeader from './GallaryHeader';


const GallaryMain = () => {
    const [staffs ] = useGallary()
    return (
        <div>
            {
                staffs.length? <div>
                    <Navbar></Navbar>
            <GallaryHeader></GallaryHeader>
             <Gallary staffs={staffs}></Gallary>
            <Footer></Footer>
                </div>: <div style={{display:'flex' ,alignItems:'center' , justifyContent:'center' , }}><div style={{width:'400px' , height:'400px' , marginTop:'120px'}}>
                   
                <img style={{width:'100%' }} src="https://i.pinimg.com/originals/c4/ea/b4/c4eab4aef31cf79b812dcbb14b55ac3d.gif" alt="" srcset="" /></div>
                </div>
            }
            
        </div>
    );
};

export default GallaryMain;