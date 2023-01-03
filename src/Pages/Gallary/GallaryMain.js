import React, { useEffect, useState } from 'react';
import useGallary from '../../hooks/useGallary';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Gallary from './Gallary';
import GallaryHeader from './GallaryHeader';
import { useParams } from "react-router-dom";

const GallaryMain = () => {
    
    let {c} = useParams()
    const [collection , setCollection] = useState([])
    console.log(c)
    const uri = `https://serversrcnc-production.up.railway.app/gallary/${c}`
    console.log(uri)
    useEffect(()=>{
    
        fetch(`https://serversrcnc-production.up.railway.app/gallary/${c}`)
        .then(res => res.json())
        .then(data => setCollection(data))

        
    },[c])

    console.log(collection)
    return (
        <div>
            {
                collection.length? <div>
                    <Navbar></Navbar>
            <GallaryHeader></GallaryHeader>
             <Gallary 
             c={c}
             collection={collection}></Gallary>
            <Footer></Footer>
                </div>: <div style={{display:'flex' ,alignItems:'center' , justifyContent:'center' , }}><div style={{width:'400px' , height:'400px' , marginTop:'120px'}}>
                   
                <img style={{width:'100%' }} src="https://i.pinimg.com/originals/c4/ea/b4/c4eab4aef31cf79b812dcbb14b55ac3d.gif" alt="" srcset="" /></div>
                </div>
            }
            
        </div>
    );
};

export default GallaryMain;