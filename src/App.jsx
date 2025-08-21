import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import Intro from './intro/Intro';
import HomeContent from './components/content/HomeContent';
import Summary from './components/summary/Summary';
import DetailedHistory from './components/DetailedHistory/DetailedHistory';
import HistoryMap from './components/HistoryMap/HistoryMap';
import Chronology from './components/Chronology/Chronology';
import HelpAndSupport from './components/HelpAndSupport/HelpAndSupport';
import Contact from './components/Contact/Contact';

function App() {
  const [introSeen, setIntroSeen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const seen = sessionStorage.getItem('introSeen');
    if (seen) {
      setIntroSeen(true);
    }
  }, []);

  const handleIntroFinish = () => {
    setIntroSeen(true);
  };

  const showHeader = location.pathname !== '/';

  return (
    <div>
      {showHeader && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            introSeen ? (
              <Navigate to="/home" replace />
            ) : (
              <Intro onIntroFinish={handleIntroFinish} />
            )
          }
        />
        <Route path="/home" element={<HomeContent />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/detailed-history" element={<DetailedHistory />} />
        <Route path="/history-map" element={<HistoryMap />} />
        <Route path="/chronology" element={<Chronology />} />
        <Route path="/help-and-support" element={<HelpAndSupport />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
