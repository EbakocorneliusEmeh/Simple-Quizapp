import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContent';
import MobileNav from '../components/MobileNav';
import './ReviewPage.css';

const ReviewPage = () => {
  const navigate = useNavigate();
  const { state } = useQuiz();

  if (!state.answers.length) {
    return <p className="no-answers">No answers to review. Please take the quiz first.</p>;
  }

  return (
    <div className="review-container">
      <h1 className="review-title">Review Your Answers</h1>

      {state.answers.map((item, index) => (
        <div
          key={index}
          className={`review-item ${item.isCorrect ? 'correct' : 'incorrect'}`}
        >
          <h3 dangerouslySetInnerHTML={{ __html: `Q${index + 1}: ${item.question}` }} />

          <p>
            <strong>Your Answer:</strong>{' '}
            <span
              className={`your-answer ${item.isCorrect ? 'correct-text' : 'incorrect-text'}`}
              dangerouslySetInnerHTML={{
                __html: item.selected ?? 'No Answer',
              }}
            />
            {item.isCorrect ? ' ✅' : ' ❌'}
          </p>

          <p>
            <strong>Correct Answer:</strong>{' '}
            <span
              className="correct-answer"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </p>
        </div>
      ))}

      <div className="review-buttons">
        <button className="btn restart-btn" onClick={() => navigate('/')}>
          Restart Quiz
        </button>

        <button className="btn back-result-btn" onClick={() => navigate('/result')}>
          Back to Result
        </button>
      </div>
      <MobileNav />
    </div>
  );
};

export default ReviewPage;
