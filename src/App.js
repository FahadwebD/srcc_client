import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs/AboutUs';
import Home from './Pages/Home/Home/Home';
import { Routes, Route } from "react-router-dom";
import Staff from './Pages/StaffInfo/Saffs/Staff';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="staff" element={<Staff/> }/>
        <Route path="login" element={<Login/> }/>
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
