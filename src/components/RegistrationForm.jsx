import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegistrationForm({ onRegister }) {
  const [formData, setFormData] = useState({
    fullName: '',
    matricNumber: '',
    email: '',
    phone: '',
    gender: '',
    department: '',
    level: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    onRegister(formData);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <div className="logo">🎓</div>
          <h2>Student Registration</h2>
          <p>Precious Cornerstone University</p>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="form-input"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Matric Number</label>
                <input
                  type="text"
                  name="matricNumber"
                  className="form-input"
                  placeholder="e.g., 2022/606"
                  value={formData.matricNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="080XXXXXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="student@pcu.edu.ng"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Gender</label>
                <select
                  name="gender"
                  className="form-select"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Level</label>
                <select
                  name="level"
                  className="form-select"
                  value={formData.level}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Level</option>
                  <option value="100">100 Level</option>
                  <option value="200">200 Level</option>
                  <option value="300">300 Level</option>
                  <option value="400">400 Level</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Department</label>
              <select
                name="department"
                className="form-select"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Business Administration">Business Administration</option>
                <option value="Accounting">Accounting</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-input"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-input"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Register Account
            </button>

            <div className="form-footer">
              <p>
                Already have an account? <Link to="/" className="form-link">Login here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;