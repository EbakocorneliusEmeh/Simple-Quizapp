import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContent';
import MobileNav from '../components/MobileNav';
import './ResultPage.css';

const ResultPage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useQuiz();

  const correctCount = state.answers.filter((a) => a.isCorrect).length;
  const totalQuestions = state.questions.length;
  const passed = correctCount >= Math.ceil(totalQuestions * 0.5);

  const handleRetry = () => {
    dispatch({ type: 'RESTART_QUIZ' });
    navigate('/');
  };

  const handleReview = () => {
    navigate('/review');
  };

  return (
    <div className="container">
      <h1>Quiz Completed!</h1>
      <h2>
        Your Score: {correctCount} / {totalQuestions}
      </h2>
      <p className={passed ? 'green' : 'red'}>
        {passed
          ? '🎉 Congratulations! You passed the quiz!'
          : '😞 You did not reach the required score. Try again!'}
      </p>

     <div className="button-group">
  <button onClick={handleRetry}>Try Again</button>
  <button className="secondary" onClick={handleReview}>Review Answers</button>
</div>



      <MobileNav />
    </div>
  );
};

export default ResultPage;
