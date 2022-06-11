import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs/AboutUs';
import Home from './Pages/Home/Home/Home';
import { Routes, Route } from "react-router-dom";
import Staff from './Pages/StaffInfo/Saffs/Staff';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="staff" element={<Staff/> }/>
      </Routes>
      
    </div>
  );
}

export default App;
