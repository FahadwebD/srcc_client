import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import backg from '../../assets/images/footer.png';
import footerl from '../../assets/images/footerlogo.png'
import EditLocationIcon from '@mui/icons-material/EditLocation';
import './Footer.css'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Footer = () => {
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

              <Box  sx={{ flexGrow: 1 }}>
      <Grid style={{padding:'40px'}} container spacing={2}>
        <Grid item xs={12} md={3}>
          
       < div className="footer-col">
          <h4>company</h4>
          <hr style={{width:'10%'}} />
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        </Grid>
        <Grid item xs={12} md={3}>
        < div className="footer-col">
          <h4>company</h4>
          <hr style={{width:'10%'}} />
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        </Grid>
        <Grid item xs={12} md={3}>
        < div className="footer-col">
          <h4>company</h4>
          <hr style={{width:'10%'}} />
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        </Grid>
        <Grid item xs={12} md={3}>
        <div className="footer-col">
          <div style={{textAlign:'start'}}>
            <img src={footerl} style={{width:"290px" , height:'80px'}} alt="" />
            <p style={{ marginLeft:'10px' , color:"white" , fontWeight:'bold' , marginBottom:"0" , display:'flex' , alignItems:'center' }}>  <EditLocationIcon></EditLocationIcon>Lorem, ipsum dolor sit amet .</p>
          </div >
          <p style={{marginLeft:'10px' , color:"white" , fontWeight:'bold' , marginBottom:"0" , display:'flex' , alignItems:'center' }}>Email: sylhet@bdrcs.org</p>
          <p style={{marginLeft:'10px' , color:"white" , fontWeight:'bold' , marginBottom:"0" , display:'flex' , alignItems:'center' }}> Phone No: 0821-716568</p>
          <p style={{marginLeft:'10px' , color:"white" , fontWeight:'bold' , marginBottom:"0" , display:'flex' , alignItems:'center' }}>Address: Sylhet Red Crescent Unit, Topakhana (Sarda Holl Shonglogno), Sylhet</p>
        
          

         
        </div>
        </Grid>
      </Grid>
    </Box>
        </div>
    );
};

export default Footer;