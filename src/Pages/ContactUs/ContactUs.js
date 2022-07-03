
import { Avatar } from '@mui/material';
import React, { useState } from 'react';

import './ContactUs.css'
import logo from '../../assets/images/head.png'
const ContactUs = () => {

  const [status, setStatus] = useState("Submit");


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, subject, message  } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    let response = await fetch("https://peaceful-spire-22388.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
   <>
  
 
   
   <div className="background">
  <div className="containers">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
        <Avatar className='avatar'  src='https://upload.wikimedia.org/wikipedia/commons/7/74/Bangladesh_Red_Crescent_Society_Logo.png' />
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div  className="screen-body-item left">
          
          <div style={{textAlign:'left' , marginBottom:'40px'}}>
            <h3 style={{marginBottom:'5px'}}>Physical and Mailing Adress</h3>
            <p style={{margin:'0'}}>Bangladesh Red Crescent Society</p>
            <p style={{margin:'0'}}>National Headquarters</p>
            <p style={{margin:'0'}}>684-686, Red Crescent Sarak</p>
            <p style={{margin:'0'}}>Bara Maghbazar, Dhaka 1217</p>

          </div>
          <div style={{textAlign:'left' , marginBottom:'40px'}}>
            <h3 style={{marginBottom:'5px'}}>Contact Information</h3>
            <p style={{margin:'0'}}>Tel: (880) +88 02 48310188 / +88 02 48310189;</p>
            <p style={{margin:'0'}}>Fax: +88 02 9352303</p>
            <p style={{margin:'0'}}>Email: info@bdrcs.org</p>
            

          </div>
          <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
        </div>
        <div className="screen-body-item">
        <div className="app-title" style={{textAlign:'left' , marginBottom:'10px'}}>
            <span>Give Us Your Feed Back</span>
          
          </div>
          <div className="app-form">
          <form onSubmit={handleSubmit}>
          <div style={{color:'gray' , textAlign:'left'}}>
            <label >Name</label>
            </div>
            <div className="app-form-group">
              <input type="text" id="name"   className="app-form-control" />
            </div>
            <div style={{color:'gray' , textAlign:'left'}}>
            <label >Email</label>
            </div>
            <div className="app-form-group">
              <input type="email" id="email" className="app-form-control" />
            </div>
            <div style={{color:'gray' , textAlign:'left'}}>
            <label >Subject</label>
            </div>
            <div className="app-form-group">
              
              <input type="text" id="subject" className="app-form-control" />
            </div>
            <div style={{color:'gray' , textAlign:'left'}}>
            <label >Massage</label>
            </div>
            <div className="app-form-group message">
              <textarea id="message"  className="app-form-control"  style={{height:'90px'}}/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">{status}</button>
              <button type="submit" className="app-form-button">SEND</button>
            </div>
            
    
    </form> 
          </div>
        </div>
      </div>
    </div>
 
  </div>
</div>

        


    
    </>
  );
};

export default ContactUs;