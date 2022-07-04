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
<tr>
<td>2022</td>
<td>2</td>
<td>2</td>
<td>3</td>
<td>2</td>
<td>23</td>
<td>23</td>
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