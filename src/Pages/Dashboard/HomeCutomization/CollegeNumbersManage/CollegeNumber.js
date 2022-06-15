import * as React from 'react';
import useNumbers from '../../../../hooks/useNumbers';
import NumbersCard from './NumbersCard';



const CollegeNumber = () => {
    const [numbers] = useNumbers()
    
    return (
        <div>
              {numbers?.map(num => <NumbersCard
              key={num._id}
              num={num}
              ></NumbersCard>)}
        </div>
    );
};

export default CollegeNumber;