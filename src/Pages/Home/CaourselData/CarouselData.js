import React from 'react';
import Banner from '../Banner/Banner';

import useCarousel from '../../../hooks/useCarousel';
import Skeleton from '@mui/material/Skeleton';
const CarouselData = ({carousel}) => {

 

    
      const captionStyle = {
        fontSize: "2em",
        fontWeight: "bold",
      };
      const slideNumberStyle = {
        fontSize: "20px",
        fontWeight: "bold",
      };
     
      return (
        <div>
          <div>
            {carousel.length?  <Banner
                data={carousel}
                time={3000}
                width="100%"
                height="600px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={false}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={false}
                thumbnailWidth="100px"
                showNavBtn={true}
                style={{
                  margin: "0px auto",
                  width:'100%'
                }}
              />:<div>
                <Skeleton  sx={{ bgcolor: 'grey.900' }} variant="rectangular" width='100% 'height={600} />
                </div>}
           
          </div>
        </div>
      );
};

export default CarouselData;