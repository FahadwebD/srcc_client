import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs/AboutUs';
import Home from './Pages/Home/Home/Home';
import { Routes, Route } from "react-router-dom";
import Staff from './Pages/StaffInfo/Saffs/Staff';
import Login from './Pages/Login/Login/Login';

import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ViceChairmenDetails from './Pages/ViceChairmenDetails/ViceChairmenDetails';
import GallaryMain from './Pages/Gallary/GallaryMain';

import StudentMain from './Pages/Students/StudentMain';
import SignUp from './Pages/Login/Login/SignUp';
import RequireAuth from './Pages/Login/Login/RequireAuth';
import RequireAdmin from './Pages/Login/Login/RequireAdmin';
import ContactUs from './Pages/ContactUs/ContactUs';
import ContactMain from './Pages/ContactUs/ContactMain';
import NoticeDetail from './Pages/NoticeDetail/NoticeDetail';


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speech/:id" element={<ViceChairmenDetails />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="/staff/:c" element={<Staff/> }/>
        <Route path="student" element={<StudentMain/> }/>
        <Route path="contact" element={<ContactMain/> }/>
        <Route path="contact" element={<ContactMain/> }/>
        <Route path="/detail/:id" element={<NoticeDetail/> }/>



        <Route path="login" element={<Login/> }/>
        <Route path="signup" element={<SignUp/> }/>

        <Route path="gallary" element={<GallaryMain/> }/>
        <Route path="dashboard/*" element={<RequireAdmin><Dashboard /></RequireAdmin>} >

      

        </Route>


      </Routes>
  
    </div>
  );
}

export default App;
