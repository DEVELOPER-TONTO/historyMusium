// App.jsx
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Intro from './intro/Intro';
import Home from './components/Home';

function App() {
  const [introSeen, setIntroSeen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('introSeen');
    setIntroSeen(!!seen);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            introSeen ? <Navigate to="/home" replace /> : <Intro />
          }
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
