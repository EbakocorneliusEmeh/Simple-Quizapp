// src/components/QuestionCard.jsx
import React from 'react';
import './QuestionCard.css';

const QuestionCard = ({ question, options = [], onAnswer }) => {
  if (!question || options.length === 0) return <p>Loading question...</p>;

  return (
    <div className="container">
      <h2 dangerouslySetInnerHTML={{ __html: question }} />
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${option.toLowerCase() === 'true' ? 'true-btn' : 'false-btn'}`}
            onClick={() => onAnswer(option)}
            dangerouslySetInnerHTML={{ __html: option }}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
