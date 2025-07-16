 import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContent';
import useFetchQuestions from '../hooks/userFetchQuestions';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';
import Timer from '../components/Timer';
import MobileNav from '../components/MobileNav';
import './QuestionPage.css';

const categories = [
  { id: '', name: 'Any Category' },
  { id: 9, name: 'General Knowledge' },
  { id: 17, name: 'Science & Nature' },
  { id: 21, name: 'Sports' },
  { id: 23, name: 'History' },
];

const QuestionPage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useQuiz();
  const [category, setCategory] = useState('');

 
  useFetchQuestions(category);

  const question = state.questions[state.currentQuestion];

  if (!question) return <p className="loading">Loading questions...</p>;

  const handleAnswer = (option) => {
    const isCorrect = option === question.answer;

    dispatch({
      type: 'ANSWER_QUESTION',
      payload: {
        question: question.question,
        selected: option,
        isCorrect,
        answer: question.answer,
      },
    });

    if (state.currentQuestion + 1 >= state.questions.length) {
      navigate('/result');
    }
  };

  const handleTimeout = () => {
    dispatch({
      type: 'ANSWER_QUESTION',
      payload: {
        question: question.question,
        selected: null,
        isCorrect: false,
        answer: question.answer,
      },
    });

    if (state.currentQuestion + 1 >= state.questions.length) {
      navigate('/result');
    }
  };

  return (
    <div className="question-page">
      <div className="container">
        <label htmlFor="category-select" className="category-label">
          Choose category:
        </label>
        <select
          id="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <ProgressBar
          current={state.currentQuestion + 1}
          total={state.questions.length}
        />
        <Timer
          key={state.currentQuestion}
          duration={15}
          onTimeout={handleTimeout}
        />
        <QuestionCard
          question={question.question}
          options={question.options}
          onAnswer={handleAnswer}
        />
      </div>

      <MobileNav />
    </div>
  );
};

export default QuestionPage;
