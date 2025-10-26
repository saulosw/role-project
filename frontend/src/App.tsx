import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePagePage from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUsPage from './pages/AboutUs';
import CreateEventPage from './pages/CreateEvent';
import EventPage from './pages/EventPage';
import ExplorePage from './pages/ExplorePage';
import ProfilePage from './pages/Profile';
import MyEventsPage from './pages/MyEvents';
import ParticipatingEventsPage from './pages/ParticipatingEvents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePagePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/criar' element={<CreateEventPage />} />
        <Route path="/sobre" element={<AboutUsPage />} />
        <Route path="/explorar" element={<ExplorePage />} />
        <Route path="/event/:eventId" element={<EventPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/my-events" element={<MyEventsPage />} />
        <Route path="/profile/participating" element={<ParticipatingEventsPage />} />
      </Routes>
    </Router>
  );
}

export default App
