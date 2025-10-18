import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/HomePage/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs/AboutUs';
import CreateEvent from './pages/CreateEvent/CreateEvent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/criar' element={<CreateEvent />} />
        <Route path="/sobre" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App
