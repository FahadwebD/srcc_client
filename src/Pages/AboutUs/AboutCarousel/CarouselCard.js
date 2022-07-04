import React from 'react';
import './Carousel.css'
const CarouselCard = ({c}) => {
    return (
        <div>
               <div className="card">
    <div className="card-header">
      <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
    </div>
    <div className="card-body">
      <span className="tag tag-teal">{c.title}</span>
      <h4>
        Why is the Tesla Cybertruck designed the way it
        is?
      </h4>
      <p>
        An exploration into the truck's polarising design
      </p>
      <div className="user">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Bangladesh_Red_Crescent_Society_Logo.png" alt="user" />
        <div style={{textAlign:'left'}} className="user-info">
          <h5>Sylhet Red Crescent Nursing College</h5>
          <small>Sylhet Bangladesh</small>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default CarouselCard;