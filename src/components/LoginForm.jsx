import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({
    matricNumber: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login with dummy data
    onLogin({
      fullName: 'John Doe',
      matricNumber: formData.matricNumber,
      email: 'john.doe@pcu.edu.ng',
      department: 'Computer Science',
      level: '400'
    });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <div className="logo">🎓</div>
          <h2>Student Portal Login</h2>
          <p>Precious Cornerstone University</p>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Matric Number / Email</label>
              <input
                type="text"
                name="matricNumber"
                className="form-input"
                placeholder="Enter your matric number or email"
                value={formData.matricNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login to Portal
            </button>

            <div className="form-footer">
              <a href="#" className="form-link">Forgot Password?</a>
              <p style={{ marginTop: '1rem' }}>
                Don't have an account? <Link to="/register" className="form-link">Register here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;