import * as React from 'react';
import useNumbers from '../../../../hooks/useNumbers';
import NumbersCard from './NumbersCard';



const CollegeNumber = () => {
    const [numbers] = useNumbers()
    
    return (
        <div>
             <div style={{display:'flex' , justifyContent:'space-around', alignItems:'center'}}>
          <h3>title </h3>
            <h3>numbers</h3>
           <div>
           <h3>Action</h3>
           </div>
          </div>
              {numbers?.map(num => <NumbersCard
              key={num._id}
              num={num}
              ></NumbersCard>)}
        </div>
    );
};

export default CollegeNumber;