import localData from '../data/question.json'

export const fetchQuestions = async () => {
  try {
    const res = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');

    if (!res.ok) throw new Error('Network error or rate limit');

    const data = await res.json();

    if (!data.results || data.results.length === 0) throw new Error('Empty results');

    const formatted = data.results.map((q) => ({
      question: decodeHTML(q.question),
      answer: decodeHTML(q.correct_answer),
      options: shuffle([
        ...q.incorrect_answers.map(decodeHTML),
        decodeHTML(q.correct_answer),
      ]),
    }));

    return formatted;
  } catch (err) {
    console.warn('Using local backup due to error:', err.message);
    return localData;
  }
};

const decodeHTML = (str) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = str;
  return txt.value;
};

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
