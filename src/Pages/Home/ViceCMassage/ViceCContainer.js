
import React, { useState } from 'react';
import './ViceChairmen.scss'
import useStaff from '../../../hooks/useStaff';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@mui/material';





const ViceCContainer = () => {

    const [staffs] = useStaff()

    const [chairmen , setChairmen] = useState()
    

      useEffect(()=>{

        const found = staffs?.find(obj => {
            return obj.designation.split(" ").join("").toLowerCase() === 'chairman';
          });
        setChairmen(found)
      },[staffs])
      
    return (
        <>
	{chairmen?	<div style={{padding:'40px'}}>
        	<article style={{textAlign:"left"}} className="postcard light red">
			<div className="postcard__img_link" style={{padding:'10px'}}>
                <img className="postcard__img" src={`data:image/png;base64,${chairmen?.image}`}  alt="" srcset="" />
				
			</div>
			<div className="postcard__text t-dark">
				<h2 className="postcard__title red">{chairmen?.name}</h2>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
          {chairmen?.designation}
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">{chairmen?.speech.slice(0, 400)+'...'} <Button style={{backgroundColor:'green' , border:'none' , color:'white' , padding:'2px'}}><Link style={{textDecoration:'none' , color:'white'}} to={`/speech/${chairmen?._id}`}>Read More</Link></Button></div>
				<ul className="postcard__tagbox">
               
					
				</ul>
			</div>
		</article>
        </div>:	<div style={{padding:'40px'}}>
        	<article style={{textAlign:"left"}} className="postcard light red">
			<div className="postcard__img_link" style={{padding:'10px'}}>
                <img className="postcard__img" src="https://st3.depositphotos.com/23594922/31822/v/380/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg?forcejpeg=true" alt="" srcset="" />
				
			</div>
			<div className="postcard__text t-dark">
				<h2 className="postcard__title red">Chairman</h2>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
          
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt"> </div>
				<ul className="postcard__tagbox">
               
					
				</ul>
			</div>
		</article>
        </div>}
		</>
    );
};

export default ViceCContainer;