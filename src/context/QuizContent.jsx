import React, { createContext, useContext, useReducer } from 'react';

const QuizContext = createContext();

const initialState = {
  questions: [],
  currentQuestion: 0,
  answers: [],
};

function quizReducer(state, action) {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return {
        ...state,
        questions: action.payload,
        currentQuestion: 0,
        answers: [],
      };

    case 'ANSWER_QUESTION':
      return {
        ...state,
        answers: [...state.answers, action.payload],
        currentQuestion: state.currentQuestion + 1,
      };

    case 'RESET_QUIZ':
      return initialState;

    default:
      return state;
  }
}

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
