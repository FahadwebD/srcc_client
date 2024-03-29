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
import NoticesMain from './Pages/AllNotices/NoticesMain';
import ImportantInformation from './Pages/ImportantInformation/ImportantInformation';
import EventDetails from './Pages/Home/NoticeAndEvent/Events/EventDetails';
import ScrollToTop from './ScrollToTop';


function App() {
  return (
    <div className="App">
     <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speech/:id" element={<ViceChairmenDetails />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="/staff/:c" element={<Staff/> }/>
        <Route path="student" element={<StudentMain/> }/>
        <Route path="notices" element={<NoticesMain/> }/>
        <Route path="contact" element={<ContactMain/> }/>
        <Route path="/important/:course" element={<ImportantInformation/> }/>

        <Route path="/evdetail/:id" element={<EventDetails/> }/>
       
        <Route path="/detail/:id" element={<NoticeDetail/> }/>



        <Route path="login" element={<Login/> }/>
        <Route path="signup" element={<SignUp/> }/>

        <Route path="/gallary/:c" element={<GallaryMain/> }/>
        <Route path="/dashboard/*" element={<RequireAdmin><Dashboard /></RequireAdmin>} >

      

        </Route>


      </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
