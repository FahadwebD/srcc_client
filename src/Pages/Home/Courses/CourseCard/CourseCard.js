import { Button } from '@mui/material';
import React from 'react';
import '../Courses/Courses.css'


const CourseCard = ({courses}) => {
    const{duration,image ,coursename} = courses
    // const url = `/appointed/${id}`
    
    return (
        <div>
            <div className="cards">
            <div className="card-content">
                <div className="card-body"> <img style={{height:100}}  className="img img-fluid" src={image} alt=''/>
                    <div className="shadow"></div>
                    <div className="card-title">{coursename}</div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">{duration}</small> </p>
                    </div>
                <Button style={{backgroundColor:'red' , color:'white' , border:'none'}}>Learn More</Button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CourseCard;