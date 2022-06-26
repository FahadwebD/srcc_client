import { Button, CircularProgress } from '@mui/material';
import React from 'react';
import useCarousel from '../../../../hooks/useCarousel';
import AddCarouselData from './AddCarouselData/AddCarouselData';
import CarouselTable from './CarouselTable/CarouselTable';

const CarouselManage = () => {
    const [carousel , setCarousel] = useCarousel();
    return (
        <>
        {carousel.length?<div>
             <div style={{display:'flex', justifyContent:'space-between' , alignItems:'center'}}>
            <div>
            <h3>All Data</h3> 
            </div>
            <div>
            <AddCarouselData></AddCarouselData>
            </div>
        </div>
        <div style={{display:'flex' , justifyContent:'space-between'}}>
            <h2>Image</h2>
            <h2>Caption</h2>
            <h2>Action</h2>
        </div>
            {carousel?.map(item => <CarouselTable
            key={item.title}
            item={item}
            ></CarouselTable>)}
        </div>:<div>
        <CircularProgress color="secondary" />
        </div>}
        </>
    );
};

export default CarouselManage;