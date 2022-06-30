import React from 'react';
import Footer from '../../Shared/Footer/Footer';

import Navbar from '../../Shared/Navbar/Navbar';
import ContactHeader from './ContactHeader';
import ContactUs from './ContactUs';

const ContactMain = () => {
    return (
        <div>
             <Navbar></Navbar>
              <ContactHeader></ContactHeader>
              <ContactUs></ContactUs>
              <Footer></Footer>
        </div>
    );
};

export default ContactMain;