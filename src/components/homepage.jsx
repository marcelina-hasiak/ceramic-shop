import React from 'react';
import styles from './homepage.module.scss'

const HomePage = () => (
  <>
    <div className={styles['header-and-main-content-wrapper']}>
      <header className={styles["header"]}>
        <div className={styles["logo-and-title-wrapper"]}>
          <a className={styles["site-logo"]}>J&P</a>
          <h1 className={styles["site-name"]}>Ceramic Boat</h1>
        </div>
        <nav className={styles["site-navigation"]}>
          <a className={styles["site-navigation-link"]}>
            <img className={styles["site-navigation-icon"]}></img>
            Contact
          </a>
          <a className={styles["site-navigation-link"]}>
            <img className={styles["site-navigation-icon"]}></img>
            Sign in
          </a>
          <a className={styles["site-navigation-link"]}>
            <img className={styles["site-navigation-icon"]}></img>
            My cart
          </a>
        </nav>
      </header>
      <main>
        <article>
          {/* <!-- Slider main container --> */}
          <div class={styles["swiper-container"]}>
            {/* <!-- Additional required wrapper --> */}
            <div class="swiper-wrapper">
              {/* <!-- Slides --> */}
              <div class="swiper-slide">Slide 1</div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
            </div>
            {/* <!-- If we need pagination --> */}
            <div class="swiper-pagination"></div>

            {/* <!-- If we need navigation buttons --> */}
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            {/* <!-- If we need scrollbar --> */}
            <div class="swiper-scrollbar"></div>
          </div>
          <nav className={styles['shop-navigation']}>
            <a className={styles['shop-navigation-item']} href="#">
              <h2 className={styles['shop-navigation-title']}>Glina</h2>
            </a>
            <a className={styles['shop-navigation-item']} href="#">
              <h2 className={styles['shop-navigation-title']}>Szkliwa</h2>
            </a>
            <a className={styles['shop-navigation-item']} href="#">
              <h2 className={styles['shop-navigation-title']}>Warsztaty</h2>
            </a>
            <a className={styles['shop-navigation-item']} href="#">
              <h2 className={styles['shop-navigation-title']}>Narzędzia</h2>
            </a>
            <a className={styles['shop-navigation-item']} href="#">
              <h2 className={styles['shop-navigation-title']}>Urządzenia</h2>
            </a>
          </nav>
        </article>
      </main>
    </div>
    <footer className={styles["footer"]}>
      <ul>
        <li>
          <a className={styles["footer-link"]}>
            <img className={styles["footer-icon"]}></img>
            Paweł Kleszcz <br/> ul. Wieńcowa 5/32 <br/> 93-390, Łódź
          </a>
        </li>
        <li>
          <a className={styles["footer-link"]}>
            <img className={styles["footer-icon"]}></img>
            600-500-400
          </a>
        </li>
        <li>
          <a className={styles["footer-link"]}>
            J&P
          </a>
        </li>
        <li>
          <a className={styles["footer-link"]}>
            <img className={styles["footer-icon"]}></img>
            p.kleszcz@gmail.com
          </a>
        </li>
        <li>
          <a className={styles["footer-link"]}>
            <img className={styles["footer-icon"]}></img>
            facebook.com/j&p
          </a>
        </li>
      </ul>
    </footer>
  </>
)

export default HomePage