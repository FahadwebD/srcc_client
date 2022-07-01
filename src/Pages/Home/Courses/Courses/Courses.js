import { Container } from '@material-ui/core';
import React from 'react';
import useCourses from '../../../../hooks/useCourses';
import CourseCard from '../CourseCard/CourseCard';
import './Courses.css'

const Courses = () => {

    const [courses] = useCourses([])



    return (
        <>
        <div style={{marginTop:'70px'}}>
            <h1>Courses We Offer</h1>
            <hr style={{width:'10%' , backgroundColor:'red' , border: '1px solid red'}} />
        </div>
        <div style={{padding:'40px'}}>
             <Container>
             <div className='mapGrid'>
            
            {
                courses.map(courses=> <CourseCard
                key={courses.duration}
                courses={courses}
                ></CourseCard>)
            }
        </div>
             </Container>
        </div>
        </>
    );
};

export default Courses;