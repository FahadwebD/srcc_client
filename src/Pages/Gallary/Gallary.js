import React from 'react';
import useGallary from '../../hooks/useGallary';
import GallaryPic from './GallaryPic';

const Gallary = () => {

 const [staffs ] = useGallary()

console.log(staffs)
  return (
    <div>
      
      <br /><br />

      <GallaryPic
        staffs={staffs}
      />

      <br /><br />
   
    </div>
  );
};

export default Gallary;