import React from 'react';
import './Carousel.css'
const CarouselCard = ({c}) => {
    return (
        <div>
               <div className="card">
    <div className="card-header">
      <img src={`data:image/png;base64,${c.image}`} alt="rover" />
    </div>
    <div className="card-body">
      <span className="tag tag-teal">{c.headline}</span>
      <h4>
        {c.facilities}
      </h4>
    
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