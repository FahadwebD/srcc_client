import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Header from './Header';
import Speech from './Speech';
import { useParams } from "react-router-dom";
const ViceChairmenDetails = () => {
    const[speeches , setSpeeches] = useState()
    let { id } = useParams();
    console.log(id)
     
    useEffect(()=>{


        fetch(`https://serversrcnc-production.up.railway.app/staff/${id}`)
        .then(res=> res.json())
        .then(data => setSpeeches(data) )
    },[id])

    console.log(speeches)
    return (
        <div>
            <Navbar></Navbar>
            <Header speeches={speeches}></Header>
            <Speech speeches={speeches}></Speech>
            <Footer></Footer>
        </div>
    );
};

export default ViceChairmenDetails;