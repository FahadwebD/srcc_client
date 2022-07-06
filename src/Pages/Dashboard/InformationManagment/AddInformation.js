import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { MenuItem, TextField } from '@mui/material';
import useCourses from '../../../hooks/useCourses';
import { useState } from 'react';

export default function AddInformation({callUse}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

    const [session, setSession] = React.useState('');
    const [maleGenaral, setMaleGenaral] = React.useState('');
    const [malePoor, setMalePoor] = React.useState('');
    const [femaleGenaral, setFemaleGenaral] = React.useState('');
    const [femalePoor, setFemalePoor] = React.useState('');
    const [numbers, setNumbers] = React.useState('');
    const [enrolled, setEnrolled] = React.useState('');
    const [course, setCourse] = React.useState('');
    const [courses , setCourses] = useCourses()
    const [id , setId] = useState()
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };






  const handleCourseChange = (event) => {
    setCourse(event.target.value);
    const found =courses.find(obj => {
      return obj.courseName ===event.target.value;


    });
    setId(found._id)
  };

  const handleSubmit = e => {
     
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('session', session);
    formData.append('maleGenaral', maleGenaral);
    formData.append('malePoor', malePoor);
    formData.append('femaleGenaral', femaleGenaral);
    formData.append('femalePoor', femalePoor);
    formData.append('numbers', numbers);
    formData.append('enrolled', enrolled);
    formData.append('course' ,course)
    formData.append('courseId' ,id)
    console.log(formData)
    fetch('https://peaceful-spire-22388.herokuapp.com/info', {
        method: 'POST',
 
        body: formData
    })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
              
              alert('Information added successfully')
              callUse()
              toggleDrawer('top', false)
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}










  return (
    <div>
    
          <Button style={{backgroundColor:'green' , color:'white'}}  onClick={toggleDrawer('top', true)}>Add Information</Button>
          <Drawer
            anchor={'top'}
            open={state['top']}
            onClose={toggleDrawer('top', false)}
          >
          <div id='students'>
           <table >

<thead>
<tr>
<th rowspan="3" >Session</th>
<th colspan="4" >Students Category</th>
<th rowspan="3" >Numbers of Student </th>
<th rowspan="3" >Approved Seat</th>
</tr>

<tr>
<th colspan="2" >male</th>
<th colspan="2" >Female</th>
</tr>

<tr>
<th>general</th>
<th>poor</th>
<th>general</th>
<th>poor</th>
</tr>
</thead>

<tbody>


</tbody>

</table>
<form onSubmit={handleSubmit}>



<td><TextField
                    sx={{ width: '100%' }}
                   
                    required
                    onChange={e => setSession(e.target.value)}
                    /></td>
<td><TextField
                    sx={{ width: '100%' }}
               
                    required
                    onChange={e => setMaleGenaral(e.target.value)}
                    /></td>
<td><TextField
                    sx={{ width: '100%' }}
                
                    required
                    onChange={e => setMalePoor(e.target.value)}
                 /></td>
<td><TextField
                    sx={{ width: '100%' }}
                 
                    required
                    onChange={e => setFemaleGenaral(e.target.value)}
                    /></td>
<td><TextField
                    sx={{ width: '100%' }}
                
                    required
                    onChange={e => setFemalePoor(e.target.value)}
                    /></td>
<td><TextField
                    sx={{ width: '100%' }}
                 
                    required
                    onChange={e => setNumbers(e.target.value)}
                   
                  /></td>
                  <td><TextField
                    sx={{ width: '100%' }}
                 
                    required
                    onChange={e => setEnrolled(e.target.value)}
                   
                  /></td>
                  <TextField

sx={{ width: '40%',  marginTop:'10px !important' , padding:'10px !important'}}
id="outlined-size-small"
required
select
label="Which Course"
value={courses?.courseName}
onChange={handleCourseChange}
>
{courses?.map((option) => (
  <MenuItem key={option?.courseName} value={option?.courseName}>
    Course .{option?.courseName}
  </MenuItem>
))}
</TextField>

<Button style={{backgroundColor:'green'}} type="submit" >Add Information </Button>
</form>

        </div>
          </Drawer>
  
    </div>
  );
}