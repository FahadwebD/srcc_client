import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Route,
    Link,
    useNavigate,
    Routes
} from "react-router-dom";
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyIcon from '@mui/icons-material/Key';
import HomeIcon from '@mui/icons-material/Home';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AddCourses from '../AllCourses/AddCourses';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Courses from '../../Home/Courses/Courses/Courses';
import logo from '../../../assets/images/footerlogo.png'
import HomeCustome from '../HomeCutomization/HomeCustome';
import StaffManage from '../StaffManage/StaffManage';
import StudentManage from '../StudentManage/StudentManage';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Users from '../UserControl/Users';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Customization from '../FooterCustomization/Customization';
import NoticeManage from '../NoticeAndEventManage/NoticeManage/NoticeManage';
import EventManage from '../NoticeAndEventManage/EventManage/EventManage';
const drawerWidth = 250;



function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
   
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    

   
    const drawer = (
        <div style={{backgroundColor:'red' , height:'100%'}}>
            <Toolbar />
            <div style={{display:'flex' , alignItems:'center' ,position: 'absolute',
                top: '0px',left:'10px'}}><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to='/'> <img src={logo} alt="" style={{width:'100%' , height:'80px'}} srcset="" /></Link></div>
            

            <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px' , marginTop:'30px'}}> <HomeIcon style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to='homeCustom'><Button color="inherit">Home Customization </Button></Link></div>

            <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px' , marginTop:'30px'}}> <HomeIcon style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to='otherCustom'><Button color="inherit">Other Customization </Button></Link></div>


            <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px' }}> <PersonSearchIcon style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to='staffManage'><Button color="inherit">Staff Manage </Button></Link></div>
          
            <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px' }}> <AdminPanelSettingsIcon style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to='studentManage'><Button color="inherit">Student Manage </Button></Link></div>
           
            <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px' }}> <NewspaperIcon style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to='noticeManage'><Button color="inherit">Notice Manage</Button></Link></div>

            <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px' }}> <EventNoteIcon style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to='eventManage'><Button color="inherit">Event Manage </Button></Link></div>
   <Box>
               
            
            <div style={{display:'flex' , alignItems:'center' ,marginLeft:'10px'}}><HistoryEduIcon style={{color:'white' , fontWeight:'bolder'}}/><Link style={{textDecoration:'none' , color:'white' , fontWeight:'bolder'}} to={'course'}><Button color="inherit">Write Blogs</Button></Link></div>
           
                
                
                </Box>
            
        
          {user ?  <div style={{display:'flex' , alignItems:'center' ,position: 'absolute',
                bottom: '10px',left:'10px'}}>
                    
                    
                     <LogoutIcon  style={{color:'white' , fontWeight:'bolder'}}/><Button color="inherit" style={{color:'white'}} onClick={logout} >Log Out</Button>
                    
                     
                     </div>: 
                     
                     <Link to="/login"><Button size="small" variant="contained" startIcon={<KeyIcon />}>
          SRCNC Log In
      </Button></Link>
      
      
      
      }
                     
                     
                     
                     
               
                    
                
                   
                    
                    
                            
                      
           
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor:'white',
                    border: 'none'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={{color:'black'}} variant="h6" noWrap component="div">
                        <img src={logo} alt="" srcset="" />
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

               <Routes>
               <Route path="/homeCustom" element={<HomeCustome/>} />
               <Route path="/otherCustom" element={<Customization/>} />

               <Route path="/staffManage" element={<StaffManage/>} />
               <Route path="/studentManage" element={<StudentManage/>} />
               <Route path="/noticeManage" element={<NoticeManage/>} />
               <Route path="/eventManage" element={<EventManage/>} />


               <Route path="/users" element={<Users/>} />
               <Route path="/addCourse" element={<AddCourses />} />
               <Route path="/course" element={<Courses/>} />
               </Routes>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;