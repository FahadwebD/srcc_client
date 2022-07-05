import * as React from 'react';

import footerl from '../../assets/images/WEB HEAD.png'

import './Footer.css'
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';






const Footer = () => {


const [footInfo , setFootInfo] = React.useState('')


  React.useEffect(() =>{

    fetch('https://peaceful-spire-22388.herokuapp.com/footerInfo')
    .then(res=>res.json())
    .then(data=>setFootInfo(data))
  }, []);

  

    return (
        <div style={{  
       marginTop:'70px', 
        backgroundPosition: 'center',
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       width: "100%",
       height: 'auto',
       lineHeight: '1.5',
       
       backgroundColor:'#c60000' }}
       >

<footer class="footer-distributed">

<div class="footer-left">
  <img src={footerl} style={{    width: '350px',height: '100px',marginLeft: '-20px'}} alt="" />
  <p class="footer-links">
    <Link to='/'  class="link-1">Home</Link>
  
    <Link to='/about' >About Us</Link>
    
    <Link to="/gallary/all">Gallary</Link>
    
    <Link to="/contact">Contact</Link>
  </p>


</div>

<div class="footer-center">

  <div>
    <i class="fa fa-map-marker"><LocationOnIcon/></i>
    <p>{footInfo[0]?.info}</p>
  </div>

  <div>
    <i class="fa fa-phone"><LocalPhoneIcon/></i>
    <p>{footInfo[1]?.info}</p>
  </div>

  <div >
    <i class="fa fa-envelope"><MailIcon/></i>
    <p><a href={`mailto:${footInfo[2]?.info}`}>{footInfo[2]?.info}</a></p>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span>Useful Links</span>
    <a style={{color:'white'}} href="https://bdrcs.org/">Bangladesh Red Crescent Society</a>
    <br/>
    <a style={{color:'white'}} href="http://bnmc.gov.bd/">Bangladesh Nursing and Midwifery Council</a>
    <br/>
    <a style={{color:'white'}} href="http://dgnm.gov.bd/">Directorate General of Nursing and Midwifery</a>
    <br/>
    <a style={{color:'white'}} href="https://mefwd.gov.bd/">Medical Education and Family Welfare Division</a>
  </p>

 





</div>

</footer>
        </div>
    );
};

export default Footer;

//<img src={footerl} style={{width:"300px" , height:'80px'}} alt="" />