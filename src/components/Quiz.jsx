import { useEffect, useState } from 'react';
import { useQuiz } from '../context/QuizContext';

export default function Quiz({ onFinish }) {
  const { questions, index, setIndex, score, setScore, answers, setAnswers, settings } = useQuiz();
  const [left, setLeft] = useState(settings.time);

  useEffect(() => {
    if (settings.time === 0) return;
    if (left === 0) handleAnswer(null);
    const t = setTimeout(() => setLeft(x => x - 1), 1000);
    return () => clearTimeout(t);
  }, [left]);

  const handleAnswer = (opt) => {
    const q = questions[index];
    const correct = opt === q.correctAnswer;
    if (correct) setScore(score + 1);
    setAnswers([...answers, { q, opt, correct }]);
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setLeft(settings.time);
    } else {
      onFinish();
    }
  };

  const q = questions[index];

  return (
    <div className="max-w-2xl mx-auto space-y-3">
      <h2 className="text-lg font-bold">{q.question}</h2>
      <p>{q.category} | {q.difficulty}</p>
      {settings.time > 0 && <p>Timp: {left}s</p>}
      <div className="grid gap-2">
        {q.options.map(opt => (
          <button
            key={opt}
            className="border p-2 hover:bg-blue-100 dark:hover:bg-blue-800"
            onClick={() => handleAnswer(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
