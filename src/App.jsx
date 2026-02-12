import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';
import CourseRegistration from './components/CourseRegistration';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [studentData, setStudentData] = useState(null);

  const handleLogin = (data) => {
    setIsAuthenticated(true);
    setStudentData(data);
  };

  const handleRegister = (data) => {
    setIsAuthenticated(true);
    setStudentData(data);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setStudentData(null);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              isAuthenticated ? 
              <Navigate to="/dashboard" /> : 
              <LoginForm onLogin={handleLogin} />
            } 
          />
          <Route 
            path="/register" 
            element={
              isAuthenticated ? 
              <Navigate to="/dashboard" /> : 
              <RegistrationForm onRegister={handleRegister} />
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              isAuthenticated ? 
              <Dashboard studentData={studentData} onLogout={handleLogout} /> : 
              <Navigate to="/" />
            } 
          />
          <Route 
            path="/courses" 
            element={
              isAuthenticated ? 
              <CourseRegistration studentData={studentData} onLogout={handleLogout} /> : 
              <Navigate to="/" />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;