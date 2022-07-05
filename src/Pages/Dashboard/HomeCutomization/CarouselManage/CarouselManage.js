import { Button, CircularProgress } from '@mui/material';
import React from 'react';
import useCarousel from '../../../../hooks/useCarousel';
import AddCarouselData from './AddCarouselData/AddCarouselData';
import CarouselTable from './CarouselTable/CarouselTable';

const CarouselManage = () => {
    const [carousel , setCarousel] = useCarousel();

    const call = ()=>{
        fetch('https://peaceful-spire-22388.herokuapp.com/banner')
        .then(res=>res.json())
        .then(data=>setCarousel(data.reverse()))
    }
    return (
        <>
          <div style={{display:'flex', justifyContent:'space-between' , alignItems:'center'}}>
            <div>
            <h3>All Data</h3> 
            </div>
            <div>
            <AddCarouselData
            call={call }
            ></AddCarouselData>
            </div>
        </div>
        {carousel.length?<div>
           
        <div style={{display:'flex' , justifyContent:'space-between'}}>
            <h2>Image</h2>
            <h2>Caption</h2>
            <h2>Action</h2>
        </div>
            {carousel?.map(item => <CarouselTable
            key={item.title}
            item={item}
            call={call}
            setCarousel={setCarousel}
            carousel={carousel}
            ></CarouselTable>)}
        </div>:<div>
        <CircularProgress color="secondary" />
        </div>}
        </>
    );
};

export default CarouselManage;