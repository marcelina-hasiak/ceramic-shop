import React from 'react';
import styles from './homepage.module.scss'
import Navigation from '../../components/navigation/navigation.component';


const HomePage = () => (
  <>
    <div className={styles["swiper-container"]}/>
    <Navigation/>
  </>
)

export default HomePage