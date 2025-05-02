import { useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';

export default function Results({ onRestart }) {
  const { user, score, questions, answers, saveHistory, history } = useQuiz();

  useEffect(() => {
    saveHistory({ user, score });
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-xl font-bold">Rezultate</h1>
      <p>Scor: {score}/{questions.length}</p>

      <div className="space-y-2">
        {answers.map((a, i) => (
          <div key={i} className="border p-2">
            <p><strong>{a.q.question}</strong></p>
            <p>Răspuns: {a.opt || 'Niciunul'}</p>
            <p>Corect: {a.q.correctAnswer}</p>
            <p>{a.correct ? 'Corect' : 'Gresit'}</p>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold">Istoric Scoruri</h2>
      <table className="w-full border">
        <thead><tr><th>Nume</th><th>Scor</th></tr></thead>
        <tbody>
          {history.map((h, i) => (
            <tr key={i} className="text-center border-t">
              <td>{h.user}</td><td>{h.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="bg-green-600 text-white px-4 py-2" onClick={onRestart}>Înapoi la Start</button>
    </div>
  );
}