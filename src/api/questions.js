import { API_URL } from './config';
import localQuestions from '../data/data.json';

export const fetchQuestions = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Network error or rate limit');
    const data = await response.json();
    return data.results.map((q) => ({
      question: q.question,
      options: [...q.incorrect_answers, q.correct_answer].sort(() => 0.5 - Math.random()),
      answer: q.correct_answer,
    }));
  } catch (error) {
    console.warn('Using local backup due to error:', error.message);
    return localQuestions;
  }
};
