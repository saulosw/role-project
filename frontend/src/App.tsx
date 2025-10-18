import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePagePage from './pages/HomePagePage';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUsPage from './pages/AboutUsPage';
import CreateEventPage from './pages/CreateEventPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePagePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/criar' element={<CreateEventPage />} />
        <Route path="/sobre" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}

export default App
