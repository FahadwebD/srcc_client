import React from 'react';
import nurse from '../../../assets/images/About Banner.jpg'
import Welcome from '../../Home/Welcome/Welcome';
import './AboutUs.css'
const About = () => {
    return (
        <div>
            <div>
            <div className='h'  style={{marginTop:'100px'}}>
      
      <div className="overlay">
            <h1>About Us</h1>
                

	<br/>
	<button>Scroll Down</button>
		</div>
       
        </div>
            </div>
            <div style={{marginTop:'100px' , padding:"50px"}}>
                <Welcome></Welcome>
            </div>
        </div>
    );
};

export default About;