import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import useCourses from '../../hooks/useCourses';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import './importan.css'
import InformationsHeader from './InformationsHeader';




const ImportantInformation = () => {

    const [information , setInformation] = useState()
    const [courses , setCourses] = useCourses()
    let { course } = useParams();
   const [courseInfo , setCourseInfo] = useState()

  

    useEffect(()=>{
        fetch(`https://serversrcnc-production.up.railway.app/coursesInfo/${course}`)
        .then(res=>res.json())
        .then(data=>setCourseInfo(data))

    },[course])



 console.log(`https://serversrcnc-production.up.railway.app/coursesInfo/${course}`)
    useEffect(()=>{
        fetch(`https://serversrcnc-production.up.railway.app/info/${course}`)
        .then(res=>res.json())
        .then(data=>setInformation(data.reverse()))

    },[course])
    console.log(`https://serversrcnc-production.up.railway.app/info/${course}`)




console.log(courseInfo)


    return (
        <>

        <Navbar></Navbar>
        <InformationsHeader></InformationsHeader>
        <div  style={{textAlign:'left' , padding:'50px'}}>
            <h2>Course Name :{courseInfo?.courseName}</h2>
            <h4>Duration :{courseInfo?.duration}</h4>
            <h4> Requirements :{courseInfo?.requirements}</h4>


         

        </div>
        <div id='students'>
           <table >

<thead>
<tr>
<th rowspan="3" >Session</th>
<th colspan="4" >Students Category</th>
<th rowspan="3" >Number of Student</th>
<th rowspan="3" >Approved Seat</th>
</tr>

<tr>
<th colspan="2" ><p>Male</p></th>
<th colspan="2" ><p>Female</p></th>
</tr>

<tr>
<th>General Quota</th>
<th>Poor & Maritorious Quota</th>
<th>General Quota</th>
<th>Poor & Maritorious Quota</th>
</tr>
</thead>
<tbody>



  {information?.map((item, i) => {
        return <tr key={i} >
            <td>{item.session}</td>
            <td>{item.maleGenaral}</td>
            <td>{item.malePoor}</td>
            <td>{item.femaleGenaral}</td>
            <td>{item.femalePoor}</td>

            

            <td>{item.numbers}</td>
            <td>{item.enrolled}</td>

    
            
        </tr>;
        })
    }
</tbody>

</table>
        </div>
        <Footer></Footer>
        </>
    );
};

export default ImportantInformation;