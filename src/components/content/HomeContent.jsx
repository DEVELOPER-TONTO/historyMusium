import React from 'react';
import styles from './HomeContent.module.css';

const Content = () => {
  return (
    <main className={styles.main}>
      <h1>환영합니다!</h1>
      <p>여기는 역사박물관의 메인 콘텐츠 영역입니다.</p>
    </main>
  );
};

export default Content;