import { Link } from '@mui/material';
import React from 'react';
import './AllStaff.css'
import DialerSipIcon from '@mui/icons-material/DialerSip';

const AllStaff = ({name , image ,designation}) => {
    return (
        <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
            <figure className="snip1515">
  <div className="profile-image"><img src={`data:image/png;base64,${image}`} alt="sample47" style={{
    width:'205px',height:'250px'
  }}/></div>
  <figcaption>
    <h3>{name}</h3>
    <h4>{designation}</h4>
    <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
    <div className="icons">
      
      <Link> <i className="ion-social-vimeo"><DialerSipIcon></DialerSipIcon></i></Link>
    </div>
  </figcaption>
</figure>

        </div>
    );
};

export default AllStaff;