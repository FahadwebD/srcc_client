import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs/AboutUs';
import Home from './Pages/Home/Home/Home';
import { Routes, Route } from "react-router-dom";
import Staff from './Pages/StaffInfo/Saffs/Staff';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ViceChairmenDetails from './Pages/ViceChairmenDetails/ViceChairmenDetails';
import GallaryMain from './Pages/Gallary/GallaryMain';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chairman" element={<ViceChairmenDetails />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="staff" element={<Staff/> }/>
        <Route path="login" element={<Login/> }/>
        <Route path="gallary" element={<GallaryMain/> }/>
        <Route path="/dashboard/*" element={<Dashboard/> }>

      

        </Route>


      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
