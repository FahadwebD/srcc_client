import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import ContactHeader from './ContactHeader';
import './ContactUs.css'
const ContactUs = () => {

  const [status, setStatus] = useState("Submit");


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
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
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div style={{textAlign:'left'}} className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
          <form onSubmit={handleSubmit}>
            <div className="app-form-group">
              <input type="text" id="name"   className="app-form-control" placeholder="NAME" />
            </div>
            <div className="app-form-group">
              <input type="email" id="email" className="app-form-control" placeholder="EMAIL"/>
            </div>
            
            <div className="app-form-group message">
              <input id="message"  className="app-form-control" placeholder="MESSAGE"/>
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