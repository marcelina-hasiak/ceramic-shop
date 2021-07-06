import React from 'react';
import styles from './homepage.module.scss'
import Navigation from '../../components/navigation/navigation.component';


const HomePage = () => (
  <main className={styles['main-content-wrapper']}>
    <article className={styles['main-content']}>
      {/* <!-- Slider main container --> */}
      <div className={styles["swiper-container"]}>
        {/* <!-- Additional required wrapper --> */}
      </div>
      <Navigation/>
    </article>
  </main>
)

export default HomePage