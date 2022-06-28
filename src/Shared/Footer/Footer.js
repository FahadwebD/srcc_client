import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import backg from '../../assets/images/footer.png';
import footerl from '../../assets/images/footerlogo.png'
import EditLocationIcon from '@mui/icons-material/EditLocation';
import './Footer.css'
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';





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
       
       backgroundImage: `linear-gradient(0deg, rgba(250, 0, 0, 0.79),  rgba(250, 0, 0, 0.79)), url(${backg})`}}>

<footer class="footer-distributed">

<div class="footer-left">
  <img src={footerl} style={{    width: '350px',height: '100px',marginLeft: '-20px'}} alt="" />
  <p class="footer-links">
    <Link to='/'  class="link-1">Home</Link>
  
    <Link to='/about' >About Us</Link>
    
    <a href="#">Gallary</a>
    
    <a href="#">Contact</a>
  </p>

  <p class="footer-company-name">Company Name © 2015</p>
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
    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
  </p>

 

    <a href="#"><i class="fa fa-facebook"></i>BDRC</a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-github"></i></a>



</div>

</footer>
        </div>
    );
};

export default Footer;

//<img src={footerl} style={{width:"300px" , height:'80px'}} alt="" />