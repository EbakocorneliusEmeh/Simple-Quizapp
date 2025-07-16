import { useEffect } from 'react';
import { useQuiz } from '../context/QuizContent';
import questionsBackup from '../data/question.json';

const useFetchQuestions = (category) => {
  const { dispatch } = useQuiz();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        let url = `https://opentdb.com/api.php?amount=10&type=boolean`;
        if (category) {
          url += `&category=${category}`;
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error('Network error or rate limit');

        const data = await response.json();
        if (!data.results) throw new Error('No questions found');

        const formattedQuestions = data.results.map((q) => ({
          question: q.question,
          options: ['True', 'False'], // since type=boolean
          answer: q.correct_answer,
        }));

        dispatch({ type: 'SET_QUESTIONS', payload: formattedQuestions });
      } catch (error) {
        console.warn('Using backup questions due to:', error.message);
        dispatch({ type: 'SET_QUESTIONS', payload: questionsBackup });
      }
    };

    fetchQuestions();
  }, [category, dispatch]);
};

export default useFetchQuestions;
