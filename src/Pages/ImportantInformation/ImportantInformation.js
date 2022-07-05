import React from 'react';
import useInfo from '../../hooks/useInfo';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import './importan.css'
import InformationsHeader from './InformationsHeader';
const ImportantInformation = () => {

    const [information , setInformation] = useInfo()


    return (
        <>

        <Navbar></Navbar>
        <InformationsHeader></InformationsHeader>
        <div id='students'>
           <table >

<thead>
<tr>
<th rowspan="3" >Session</th>
<th colspan="4" >Students Category</th>
<th rowspan="3" >Numbers </th>
<th rowspan="3" >Enrolled</th>
</tr>

<tr>
<th colspan="2" ><p>male</p></th>
<th colspan="2" ><p>Female</p></th>
</tr>

<tr>
<th>general</th>
<th>poor</th>
<th>general</th>
<th>poor</th>
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