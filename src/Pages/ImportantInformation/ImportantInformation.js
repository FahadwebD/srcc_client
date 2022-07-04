import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import './importan.css'
import InformationsHeader from './InformationsHeader';
const ImportantInformation = () => {
    return (
        <>

        <Navbar></Navbar>
        <InformationsHeader></InformationsHeader>
        <div id='students'>
           <table  style={{width:'100%'}}>

<thead>
<tr>
<th rowspan="3" ><p>Session</p></th>
<th colspan="4" ><p>Students Category</p></th>
<th rowspan="3" ><p>Numbers </p></th>
<th rowspan="3" ><p>Enrolled</p></th>
</tr>

<tr>
<th colspan="2" ><p>male</p></th>
<th colspan="2" ><p>Female</p></th>
</tr>

<tr>
<th><p>genera;</p></th>
<th><p>poor</p></th>
<th><p>general</p></th>
<th><p>poor</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>2022</p></td>
<td><p>2</p></td>
<td><p>2</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
<td><p>23</p></td>
<td><p>23</p></td>
</tr>

<tr>
<td><p>2021</p></td>
<td><p>12</p></td>
<td><p>2</p></td>
<td><p>3</p></td>
<td><p>1</p></td>
<td><p>3</p></td>
<td><p>2</p></td>
</tr>

</tbody>
</table>
        </div>
        <Footer></Footer>
        </>
    );
};

export default ImportantInformation;