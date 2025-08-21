import React from 'react';
import styles from './HomeContent.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import introBackground from '../../assets/intro_background.jpg';

const Content = () => {
  const images = [
    {
      src: introBackground,
      legend: '소개 배경'
    },
    {
      src: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      legend: '경복궁'
    },
    {
      src: 'https://images.unsplash.com/photo-1634055733324-98135d37b913?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      legend: '불국사'
    },
    {
      src: 'https://images.unsplash.com/photo-1594223193862-2d89411684b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      legend: '화성행궁'
    }
  ];

  return (
     <div className={styles.container}>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.legend} />
            <p className="legend">{image.legend}</p>
          </div>
        ))}
      </Carousel>
      <h1>환영합니다!</h1>
      <p>여기는 역사박물관의 메인 콘텐츠 영역입니다.</p>
    </div>
  );
};

export default Content;