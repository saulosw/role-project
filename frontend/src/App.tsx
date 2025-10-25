import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePagePage from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUsPage from './pages/AboutUs';
import CreateEventPage from './pages/CreateEvent';
import EventPage from './pages/EventPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePagePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/criar' element={<CreateEventPage />} />
        <Route path="/sobre" element={<AboutUsPage />} />
        <Route path="/event/:eventId" element={<EventPage />} />
      </Routes>
    </Router>
  );
}

export default App
