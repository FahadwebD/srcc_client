import React from 'react';
import useGallary from '../../hooks/useGallary';
import GallaryPic from './GallaryPic';

const Gallary = ({collection}) => {



console.log(collection)

  return (
    <div>
      
      

     

<div class="wrapper">
  

   
   <GallaryPic
        collection={collection}
      />
 
  </div>
  
 

   
    </div>
  );
};

export default Gallary;