import React from 'react';
import useGallary from '../../hooks/useGallary';
import GallaryPic from './GallaryPic';

const Gallary = ({staffs}) => {



console.log(staffs)

const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
  
  setValue(event.target.value)
};
console.log(value)
  return (
    <div>
      
      

     

<div class="wrapper">
  
    <nav>
      <div class="items">
        <span class="item active" data-name="all">All</span>
        <span class="item" data-name="bag">Office</span>
        <span class="item" data-name="shoe">Outside</span>
        <span class="item" data-name="shoe">Other</span>

      </div>
    </nav>
   <GallaryPic
        staffs={staffs}
      />
 
  </div>
  
 

   
    </div>
  );
};

export default Gallary;