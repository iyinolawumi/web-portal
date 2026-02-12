import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CourseRegistration({ studentData, onLogout }) {
  const navigate = useNavigate();
  const [selectedCourses, setSelectedCourses] = useState([]);

  const courses = [
    { code: 'CSC301', title: 'Data Structures', units: 3 },
    { code: 'CSC303', title: 'Operating Systems', units: 3 },
    { code: 'CSC305', title: 'AI Fundamentals', units: 2 },
    { code: 'CSC307', title: 'Software Engineering', units: 3 },
    { code: 'CSC309', title: 'Database Systems', units: 3 },
    { code: 'CSC311', title: 'Computer Networks', units: 3 }
  ];

  const toggleCourse = (courseCode) => {
    setSelectedCourses(prev =>
      prev.includes(courseCode)
        ? prev.filter(c => c !== courseCode)
        : [...prev, courseCode]
    );
  };

  const totalUnits = courses
    .filter(course => selectedCourses.includes(course.code))
    .reduce((sum, course) => sum + course.units, 0);

  const handleSubmit = () => {
    if (selectedCourses.length === 0) {
      alert('Please select at least one course');
      return;
    }
    alert(`Successfully registered for ${selectedCourses.length} courses (${totalUnits} units)`);
    navigate('/dashboard');
  };

  return (
    <div>
      <header className="portal-header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo">🎓</div>
            <div className="university-name">
              <h1>PCU Student Portal</h1>
              <p>Precious Cornerstone University</p>
            </div>
          </div>
          <div className="user-section">
            <span>Welcome, {studentData?.fullName}</span>
            <button onClick={onLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      <div className="dashboard-container">
        <div className="card">
          <div className="card-header">
            <h2>Course Registration</h2>
            <p>Select your courses for this semester</p>
          </div>
          <div className="card-body">
            <div style={{ background: '#f9fafb', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Student:</span>
                <span style={{ fontWeight: '500' }}>{studentData?.fullName}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Matric Number:</span>
                <span style={{ fontWeight: '500' }}>{studentData?.matricNumber}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Department:</span>
                <span style={{ fontWeight: '500' }}>{studentData?.department}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Level:</span>
                <span style={{ fontWeight: '500' }}>{studentData?.level} Level</span>
              </div>
            </div>

            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
              Available Courses
            </h3>

            <div className="table-container">
              <table className="course-table">
                <thead>
                  <tr>
                    <th style={{ width: '50px' }}>Select</th>
                    <th>Course Code</th>
                    <th>Course Title</th>
                    <th style={{ textAlign: 'center' }}>Units</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course.code}>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          className="checkbox"
                          checked={selectedCourses.includes(course.code)}
                          onChange={() => toggleCourse(course.code)}
                        />
                      </td>
                      <td style={{ fontWeight: '600', color: '#1f2937' }}>{course.code}</td>
                      <td>{course.title}</td>
                      <td style={{ textAlign: 'center' }}>
                        <span className="units-badge">{course.units}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="total-units">
              <span>Total Units Selected</span>
              <span style={{ fontSize: '1.5rem' }}>{totalUnits}</span>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit Course Registration
              </button>
              <button className="btn btn-secondary" onClick={() => navigate('/dashboard')}>
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseRegistration;