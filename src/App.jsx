import { useState } from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Results from './components/Results';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [page, setPage] = useState('start');

  return (
    <div className="min-h-screen p-4 bg-white dark:bg-gray-900 text-black dark:text-white">
      <ThemeToggle />
      {page === 'start' && <Start onNext={() => setPage('quiz')} />}
      {page === 'quiz' && <Quiz onFinish={() => setPage('results')} />}
      {page === 'results' && <Results onRestart={() => setPage('start')} />}
    </div>
  );
}
export default App;