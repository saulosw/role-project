import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/HomePage/Homepage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sobre" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App
