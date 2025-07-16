import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import MobileNav from '../components/MobileNav';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/quiz');
  };

  return (
    <div className="landing-wrapper">
      <div className="landing-box">
        <h1 className="landing-title">🎯 Welcome to the Quiz Game!</h1>
        <p className="landing-description">
          Get ready to challenge your brain in a fast-paced quiz adventure! 🧠<br /><br />
          ✅ You’ll face <strong>10 true/false questions</strong> from various categories.<br />
          ✅ You only have <strong>15 seconds</strong> to answer each question, so think fast! ⏱️<br />
          ✅ To pass, aim for at least <strong>5 correct answers</strong>.<br /><br />
          Don’t worry — at the end of the quiz, you’ll be able to <strong>review all your answers</strong> and see the correct ones.<br /><br />
          Ready to prove how much you know? Let’s get started! 🚀
        </p>
        <button className="start-button" onClick={handleStart}>
          Start Quiz
        </button>
      </div>

      <MobileNav />
    </div>
  );
};

export default LandingPage;
