import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import useCarousel from '../../../hooks/useCarousel';
import CarouselCard from './CarouselCard';
import './silk.scss'
const Carousel = () => {

const [carousel] = useCarousel()


const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src="https://raw.githubusercontent.com/ShravanMeena/clone-of-wanderon-website/b133a937cc66bf0121455513c1d21728e1b86ca0/src/assets/left-arrow.svg" alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src="https://raw.githubusercontent.com/ShravanMeena/clone-of-wanderon-website/b133a937cc66bf0121455513c1d21728e1b86ca0/src/assets/right-arrow.svg" alt="nextArrow" {...props} />
  );

var settings = {
    dots: true,
    infinite: false,
    speed: 500,

    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SlickArrowLeft />,
    prevArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
        <div style={{padding:'50px'}}>
          <h1>Our Facilities</h1>
        <hr style={{width:'10%' , backgroundColor:'red' , border: '1px solid red'}} />
             <Slider {...settings}>
            {carousel?.map(c=><CarouselCard
            c={c}
            ></CarouselCard>)}
            </Slider>
        </div>
    );
};

export default Carousel;

// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";

// import "slick-carousel/slick/slick-theme.css";
// export default class Carousel extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 5,
//       slidesToScroll: 5
//     };
//     return (
//       <div>
//         <h2> Multiple items </h2>
//        
//      {carousel.map}
//         </Slider>
//       </div>
//     );
//   }
// }