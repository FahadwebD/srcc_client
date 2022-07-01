
import React, { useState } from 'react';
import './ViceChairmen.scss'
import useStaff from '../../../hooks/useStaff';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';





const ViceCContainer = () => {

    const [staffs] = useStaff()

    const [chairmen , setChairmen] = useState()
    

      useEffect(()=>{

        const found = staffs?.find(obj => {
            return obj.designation.split(" ").join("").toLowerCase() === 'vicechairman';
          });
        setChairmen(found)
      },[staffs])
      
    return (
        <div style={{padding:'40px'}}>
        	<article style={{textAlign:"left"}} className="postcard light red">
			<div className="postcard__img_link" style={{padding:'10px'}}>
                <img className="postcard__img" src={`data:image/png;base64,${chairmen?.image}`}  alt="" srcset="" />
				
			</div>
			<div className="postcard__text t-dark">
				<h2 className="postcard__title red">{chairmen?.designation}</h2>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
                    {chairmen?.name}
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">{chairmen?.speech.slice(0, 400)+'...'}</div>
				<ul className="postcard__tagbox">
                <Link style={{textDecoration:'none'}} to={`/speech/${chairmen?._id}`}><li className="tag__item">Read More</li></Link>
					
				</ul>
			</div>
		</article>
        </div>
    );
};

export default ViceCContainer;