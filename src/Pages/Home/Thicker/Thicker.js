import React from 'react';
import useNotice from '../../../hooks/useNotice';
import './Thicker.scss'


const Thicker = () => {

const [staffs] = useNotice()
console.log(staffs)


    return (
        <div  style={{display:'flex' , padding:"5px 10px" , borderRadius:'20px!important'}}>
            <div style={{display:'flex' , alignItems:'center'}} className='heading'>Recent Notice</div>
            <div class="ticker-wrap">
  <div className="ticker">
  <div className="ticker__item">{staffs[0]?.headline}</div>
  <div className="ticker__item">{staffs[0]?.headline}</div>
  <div className="ticker__item">{staffs[0]?.headline}</div>
  <div className="ticker__item">{staffs[0]?.headline}</div>

</div>
</div>
        </div>
    );
};

export default Thicker;