import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AllStudents from './AllStudents';
import StudentsHeader from './StudentsHeader';

const StudentMain = () => {
    return (
        <div>
            <Navbar></Navbar>
            <StudentsHeader></StudentsHeader>
            <AllStudents></AllStudents>
            <Footer></Footer>
        </div>
    );
};

export default StudentMain;