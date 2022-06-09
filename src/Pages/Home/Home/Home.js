import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import CarouselData from '../CaourselData/CarouselData';
import ViceCContainer from '../ViceCMassage/ViceCContainer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
      <CarouselData></CarouselData>
      <ViceCContainer></ViceCContainer>
        </div>
    );
};

export default Home;