import React, { useEffect, useState } from 'react';

const GeneralStaff = ({c}) => {

    const[head , setHead] = useState()
    const [staffInfo , setStaffInfo] = useState()
    useEffect(()=>{
       
      if(c === 'a'){
        setHead('Adminatrator')
        setStaffInfo('Staff')
      }
     else if(c === 't'){
          setHead('Teachers')
          setStaffInfo('Staff')
      }
      else if(c === 'c'){
        setHead('Committee')
        setStaffInfo('')
      }
      else{
        setHead('Others')
        setStaffInfo('Staff')

      }


    },[c])
    return (
      <div className='h'  >
      
      <div className="overlay">
<h1>{staffInfo}</h1>
<h3>{head}</h3>

	
	
		</div>
       
        </div>
    );
};

export default GeneralStaff;