import { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [settings, setSettings] = useState({ shuffle: false, time: 0 });
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [history, setHistory] = useState(() => JSON.parse(localStorage.getItem('scores')) || []);

  const saveHistory = (entry) => {
    const updated = [...history.filter(e => e.user !== entry.user || e.score < entry.score), entry];
    setHistory(updated);
    localStorage.setItem('scores', JSON.stringify(updated));
  };

  return (
    <QuizContext.Provider value={{
      user, setUser, settings, setSettings,
      questions, setQuestions, index, setIndex,
      score, setScore, answers, setAnswers,
      history, saveHistory
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);