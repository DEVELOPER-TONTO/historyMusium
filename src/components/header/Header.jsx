import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>역사해적단</Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/summary" className={styles.navItem}>요약 역사</Link>
        <Link to="/detailed-history" className={styles.navItem}>자세히 보는 역사</Link>
        <Link to="/history-map" className={styles.navItem}>역사 지도</Link>
        <Link to="/chronology" className={styles.navItem}>역대 계보</Link>
        <Link to="/help-and-support" className={styles.navItem}>도움말 및 지원</Link>
        <Link to="/contact" className={styles.navItem}>문의하기</Link>
      </nav>
      <div className={styles.buttons}>
        <button className={styles.loginBtn}>로그인/가입</button>
        <button className={styles.startBtn}>시작하기</button>
      </div>
    </header>
  );
};

export default Header;
