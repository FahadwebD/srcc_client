import React, { useEffect, useState } from 'react';

const GeneralStaff = ({c}) => {

    const[head , setHead] = useState()
    useEffect(()=>{
       
      if(c === 'a'){
        setHead('Adminatrator')
      }
     else if(c === 't'){
          setHead('Teachers')
      }
      else{
        setHead('Others')
      }


    },[c])
    return (
      <div className='h'  >
      
      <div className="overlay">
<h1>Our Staff</h1>
<h3>{head}</h3>

	
	
		</div>
       
        </div>
    );
};

export default GeneralStaff;