import React from 'react';
import useCarousel from '../../../hooks/useCarousel';
import Footer from '../../../Shared/Footer/Footer';
import LogosHeader from '../../../Shared/LogosHeades/LogosHeader';
import Navbar from '../../../Shared/Navbar/Navbar';
import NavbarDemand from '../../../Shared/NavbarDemand';
import CarouselData from '../CaourselData/CarouselData';

import CountUps from '../CountUp/CountUps';
import Courses from '../Courses/Courses/Courses';
import NoticeAndEvent from '../NoticeAndEvent/NoticeAndEvent/NoticeAndEvent';
import RankedProffesors from '../RankedProffesors/RankedProffesors';
import Thicker from '../Thicker/Thicker';
import ViceCContainer from '../ViceCMassage/ViceCContainer';
import Welcome from '../Welcome/Welcome';


const Home = () => {

    const [carousel , setCarousel] = useCarousel();
    return (
      <div>
    <div>
            
            <Navbar></Navbar>
      <CarouselData
      carousel={carousel}
      ></CarouselData>
      <Thicker></Thicker>
      <ViceCContainer></ViceCContainer>
      <RankedProffesors></RankedProffesors>
      <CountUps></CountUps>
      <Welcome></Welcome>
      <Courses></Courses>
      <NoticeAndEvent></NoticeAndEvent>
      <Footer></Footer>
      
        </div>
      </div>
    );
};

export default Home;