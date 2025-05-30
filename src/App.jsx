import React, { useEffect, useState } from 'react';
import './Intro.css';

const Intro = () => {
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowText(true), 300);
    const timer2 = setTimeout(() => setShowButton(true), 1500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="intro-container">
      <div className={`intro-text ${showText ? 'fade-in-left' : ''}`}>
        우리나라의 역사 속에<br />들어올 준비가 되셨습니까?
      </div>
      <button
        className={`intro-button ${showButton ? 'fade-in-up' : ''}`}
        onClick={() => window.location.href = '/main'}
      >
        역사 속으로
      </button>
    </div>
  );
};

export default Intro;

