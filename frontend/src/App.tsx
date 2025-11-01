import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import EventList from './components/EventList';
import CreateEvent from './components/CreateEvent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isEventListPage = location.pathname === '/';

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-center align-items-center mb-4">
        <h1 className="text-primary mb-0">Event Dashboard</h1>
        <Link to={isEventListPage ? '/create-event' : '/'} className="ms-3 btn btn-outline-primary">
          {isEventListPage ? (
            <i className="bi bi-plus-circle"></i> // Example icon for Create Event
          ) : (
            <i className="bi bi-list-ul"></i> // Example icon for Event List
          )}
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/create-event" element={<CreateEvent />} />
      </Routes>
    </div>
  );
}

export default App;
