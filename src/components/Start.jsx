import { useState } from 'react';
import { useQuiz } from '../context/QuizContext';
import intrebari from '@/data/intrebari.json';

export default function Start({ onNext }) {
  const { setUser, setSettings, setQuestions, setIndex, setScore, setAnswers } = useQuiz();
  const [name, setName] = useState('');
  const [shuffle, setShuffle] = useState(false);
  const [time, setTime] = useState(0);

  const start = () => {
    if (!name.trim()) return alert('Scrie un nume');
    let data = [...intrebari];
    if (shuffle) data = data.sort(() => 0.5 - Math.random());
    setUser(name);
    setSettings({ shuffle, time });
    setQuestions(data);
    setIndex(0);
    setScore(0);
    setAnswers([]);
    onNext();
  };

  return (
    <div className="max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-bold">Start Quiz</h1>
      <input className="w-full p-2 border" placeholder="Nume" value={name} onChange={e => setName(e.target.value)} />
      <label>
        <input type="checkbox" checked={shuffle} onChange={e => setShuffle(e.target.checked)} /> Aleatoriu
      </label>
      <input className="w-full p-2 border" type="number" placeholder="Timp per întrebare (0 = nelimitat)" value={time} onChange={e => setTime(Number(e.target.value))} />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={start}>Start</button>
    </div>
  );
}
