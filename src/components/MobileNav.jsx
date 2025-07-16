import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MobileNav.css'; 

const MobileNav = () => {
  const navigate = useNavigate();

  return (
    <nav className="mobile-nav">
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/quiz')}>Quiz</button>
      <button onClick={() => navigate('/result')}>Result</button>
      <button onClick={() => navigate('/review')}>Review</button>
    </nav>
  );
};

export default MobileNav;
