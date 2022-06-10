import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import CarouselData from '../CaourselData/CarouselData';

import CountUps from '../CountUp/CountUps';
import Courses from '../Courses/Courses/Courses';
import RankedProffesors from '../RankedProffesors/RankedProffesors';
import ViceCContainer from '../ViceCMassage/ViceCContainer';
import Welcome from '../Welcome/Welcome';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
      <CarouselData></CarouselData>
      <ViceCContainer></ViceCContainer>
      <RankedProffesors></RankedProffesors>
      <CountUps></CountUps>
      <Welcome></Welcome>
      <Courses></Courses>
      
        </div>
    );
};

export default Home;