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
import { TextField } from '@mui/material';

export default function AddInformation() {
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
   
   

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleSessionChange = (event) => {
    setSession(event.target.value);
  };
  const handleMalePoorChange = (event) => {
    setMalePoor(event.target.value);
  };
  const handleMaleGenaralChange = (event) => {
    setMaleGenaral(event.target.value);
  };
  const handleFemaleGenaralChange = (event) => {
    setFemaleGenaral(event.target.value);
  };
  const handleFemalePoorChange = (event) => {
    setFemalePoor(event.target.value);
  };
  const handleNumbersChange = (event) => {
    setNumbers(event.target.value);
  };

  const handleEnrolledChange = (event) => {
    setEnrolled(event.target.value);
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
    
    console.log(formData)
    // fetch('https://peaceful-spire-22388.herokuapp.com/student', {
    //     method: 'POST',
 
    //     body: formData
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         if (data.insertedId) {
               
    //           alert('Staff added successfully')
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
}










  return (
    <div>
    
          <Button onClick={toggleDrawer('top', true)}>{'top'}</Button>
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
<th rowspan="3" >Numbers </th>
<th rowspan="3" >Enrolled</th>
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

<Button type="submit" >Add </Button>
</form>

        </div>
          </Drawer>
  
    </div>
  );
}