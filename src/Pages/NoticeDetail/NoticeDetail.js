import React from 'react';
import { useParams } from "react-router-dom";
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
const NoticeDetail = () => {
    let { id } = useParams();
    return (
        <div>
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default NoticeDetail;