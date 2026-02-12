import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard({ studentData, onLogout }) {
  const navigate = useNavigate();

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
            <h2>🎉 Congratulations on Your Registration!</h2>
            <p>Your account has been successfully created</p>
          </div>
          <div className="card-body">
            <div className="success-message">
              ✓ Registration Successful! Welcome to PCU Student Portal
            </div>

            <div style={{ background: '#f9fafb', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: '#1f2937' }}>Student Information</h3>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #e5e7eb' }}>
                  <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>Full Name:</span>
                  <span style={{ fontWeight: '500' }}>{studentData?.fullName}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #e5e7eb' }}>
                  <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>Matric Number:</span>
                  <span style={{ fontWeight: '500' }}>{studentData?.matricNumber}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #e5e7eb' }}>
                  <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>Email:</span>
                  <span style={{ fontWeight: '500' }}>{studentData?.email}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #e5e7eb' }}>
                  <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>Department:</span>
                  <span style={{ fontWeight: '500' }}>{studentData?.department}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                  <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>Level:</span>
                  <span style={{ fontWeight: '500' }}>{studentData?.level} Level</span>
                </div>
              </div>
            </div>

            <div className="dashboard-grid">
              <div className="stat-card">
                <div className="stat-label">Current Session</div>
                <div className="stat-value">2024/2025</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Semester</div>
                <div className="stat-value">First</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Registered Courses</div>
                <div className="stat-value">0</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Total Units</div>
                <div className="stat-value">0</div>
              </div>
            </div>

            <div className="quick-actions">
              <button className="action-btn" onClick={() => navigate('/courses')}>
                <h3>📚 Course Registration</h3>
                <p>Register for courses this semester</p>
              </button>
              <button className="action-btn">
                <h3>📊 Check Results</h3>
                <p>View your academic results</p>
              </button>
              <button className="action-btn">
                <h3>💳 School Fees</h3>
                <p>View and pay school fees</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;