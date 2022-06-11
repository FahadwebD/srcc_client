import React from 'react';
import nurse from '../../../assets/images/About Banner.jpg'

const About = () => {
    return (
        <div>
            <div>
                <img src={nurse} alt="" srcset=""  style={{width:'100%' , height:'80vh'}}/>
            </div>
            <div style={{marginTop:'100px' , padding:"50px"}}>
                <p style={{ whiteSpace: 'pre-line'}}>We are, the Bangladesh Red Crescent Society (BDRCS) – part of the world largest humanitarian non-governmental organization, The International Red Cross and Red Crescent Movement.

We have stood beside the Bangladeshi population throughout history and have played a crucial humane role in the relief, rescue and rehabilitation of hundreds and thousands of victims of flood, cyclone and other natural disasters in Bangladesh.

Our work is outlined by our guiding principles, and our history that shapes our morals and ethics. Find out more about what makes us unique, compassionate and dedicated to caring, all over the world.</p>
            </div>
        </div>
    );
};

export default About;