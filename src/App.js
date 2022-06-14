import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs/AboutUs';
import Home from './Pages/Home/Home/Home';
import { Routes, Route } from "react-router-dom";
import Staff from './Pages/StaffInfo/Saffs/Staff';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Gallary from './Pages/Gallary/Gallary';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddCourses from './Pages/Dashboard/AllCourses/AddCourses';
import Courses from './Pages/Home/Courses/Courses/Courses';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="staff" element={<Staff/> }/>
        <Route path="login" element={<Login/> }/>
        <Route path="gallary" element={<Gallary/> }/>
        <Route path="/dashboard/*" element={<Dashboard/> }>

      

        </Route>


      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
