import React, { useState } from 'react';
import './App.css';

function App() {
  const [notices] = useState([
    {
      id: 1,
      title: 'Mid-Term Exams Schedule',
      content: 'Mid-term examinations for all 200-level courses will commence from November 15, 2025. Check your department notice board for detailed timetable.',
      category: 'academics',
      date: '2025-11-01',
      priority: 'high'
    },
    {
      id: 2,
      title: 'ICT 235 Project Submission Deadline',
      content: 'The deadline for submitting the Frontend Development project is November 30, 2025. Ensure your GitHub repository is properly set up.',
      category: 'projects',
      date: '2025-11-05',
      priority: 'high'
    },
    {
      id: 3,
      title: 'University Sports Week',
      content: 'Annual sports competition begins next week. Register at the sports office before Friday.',
      category: 'events',
      date: '2025-11-03',
      priority: 'medium'
    },
    {
      id: 4,
      title: 'Library Renovation',
      content: 'The main library will be closed for renovation from November 10-17, 2025. E-library services will remain accessible online.',
      category: 'facilities',
      date: '2025-11-02',
      priority: 'medium'
    },
    {
      id: 5,
      title: 'Student Union Meeting',
      content: 'Monthly student union meeting scheduled for November 8, 2025 at 3 PM in the main auditorium.',
      category: 'events',
      date: '2025-11-01',
      priority: 'low'
    },
    {
      id: 6,
      title: 'Course Registration Extension',
      content: 'The course registration deadline has been extended to November 12, 2025. Complete your registration before this date.',
      category: 'academics',
      date: '2025-11-06',
      priority: 'high'
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNotices = notices.filter(notice => {
    const matchesCategory = selectedCategory === 'all' || notice.category === selectedCategory;
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         notice.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['all', 'academics', 'events', 'facilities', 'projects'];

  const renderNotices = () => {
    if (filteredNotices.length === 0) {
      return (
        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
          <p>No notices found. Try a different search or category.</p>
        </div>
      );
    }

    return filteredNotices.map(notice => {
      let priorityColor = '#44aa44';
      if (notice.priority === 'medium') priorityColor = '#ffaa00';
      if (notice.priority === 'high') priorityColor = '#ff4444';

      return (
        <div key={notice.id} className="notice-card">
          <h3 className="notice-title">{notice.title}</h3>
          <p className="notice-content">{notice.content}</p>
          <div className="notice-footer">
            <span>📅 {notice.date}</span>
            <span style={{
              background: priorityColor,
              color: 'white',
              padding: '3px 10px',
              borderRadius: '10px',
              fontSize: '12px'
            }}>
              {notice.priority.toUpperCase()}
            </span>
            <span>🏷️ {notice.category}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Bells University Digital Notice Board</h1>
        <p>Stay updated with the latest campus announcements</p>
      </header>
      
      <div className="controls">
        <input 
          type="text" 
          className="search-box" 
          placeholder="Search notices..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? 'All Notices' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      <div className="notice-grid">
        {renderNotices()}
      </div>
      
      <footer className="footer">
        <p>© 2025 Bells University of Technology - ICT 235 Frontend Development Project</p>
        <p>Digital Notice Board | Team Submission</p>
      </footer>
    </div>
  );
}

export default App;
