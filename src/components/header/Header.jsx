import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>역사해적단</div>
      <nav className={styles.nav}>
        <div className={styles.navItem}>요약 역사</div>
        <div className={styles.navItem}>자세히 보는 역사</div>
        <div className={styles.navItem}>역사 지도</div>
        <div className={styles.navItem}>역대 계보</div>
        <div className={`${styles.navItem} ${styles.bold}`}>도움말 및 지원</div>
        <div className={styles.navItem}>문의하기</div>
      </nav>
      <div className={styles.buttons}>
        <button className={styles.loginBtn}>로그인/가입</button>
        <button className={styles.startBtn}>시작하기</button>
      </div>
    </header>
  );
};

export default Header;