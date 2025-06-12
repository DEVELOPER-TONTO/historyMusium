import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  

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

export default Home;

