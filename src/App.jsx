import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/LandingPage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';
import ReviewPage from './pages/ReviewPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<QuestionPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
