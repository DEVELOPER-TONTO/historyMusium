import React, { useEffect, useState } from 'react';
import styles from './Intro.module.css';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer1 = setTimeout(() => setShowText(true), 300);
    const timer2 = setTimeout(() => setShowButton(true), 1500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem('introSeen', 'true');
    navigate('/home');
  };

  return (
    <div className={styles.introContainer}>
        <div className={`${styles.introText} ${showText ? styles.fadeInLeft : ''}`}>
            우리나라의 역사 속에<br />들어올 준비가 되셨습니까?
        </div>
        <button
            className={`${styles.introButton} ${showButton ? styles.fadeInUp : ''}`}
            onClick={handleEnter}
        >
        역사 속으로
      </button>
    </div>
  );
};

export default Intro;

