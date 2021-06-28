import React from 'react';
import styles from './homepage.module.scss'
import contactIcon from '../assets/icons/contact-icon.svg'
import signInIcon from '../assets/icons/sign-in-icon.svg'
import shoppingCartIcon from '../assets/icons/shopping-cart-icon.svg'
import clay from '../assets/images/clay-nav.jpg'
import glaze from '../assets/images/glaze-nav.jpg'
import tools from '../assets/images/tools-nav.jpg'
import workshops from '../assets/images/workshops-nav.jpg'
import devices from '../assets/images/devices-nav.jpg'
import facebookIcon from '../assets/icons/facebook-icon.svg' 
import mailIcon from '../assets/icons/mail-icon.svg'
import mapIcon from '../assets/icons/map-icon.svg'
import mobileIcon from '../assets/icons/mobile-icon.svg'

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
            <img src={contactIcon} className={styles["site-navigation-icon"]}></img>
            Contact
          </a>
          <a className={styles["site-navigation-link"]}>
            <img src={signInIcon} className={styles["site-navigation-icon"]}></img>
            Sign in
          </a>
          <a className={styles["site-navigation-link"]}>
            <img src={shoppingCartIcon} className={styles["site-navigation-icon"]}></img>
            My cart
          </a>
        </nav>
      </header>
      <main className={styles['main-content-wrapper']}>
        <article className={styles['main-content']}>
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
            <a className={styles['shop-navigation-item']} style={{backgroundImage:`url(${clay})`}}>
              <div className={styles['shop-navigation-overlay']}></div>
              <h2 className={styles['shop-navigation-title']}>Glina</h2>
            </a>
            <a className={styles['shop-navigation-item']} style={{backgroundImage:`url(${glaze})`}}>
              <div className={styles['shop-navigation-overlay']}></div>
              <h2 className={styles['shop-navigation-title']}>Szkliwa</h2>
            </a>
            <a className={styles['shop-navigation-item']} style={{backgroundImage:`url(${tools})`}}>
              <div className={styles['shop-navigation-overlay']}></div>
              <h2 className={styles['shop-navigation-title']}>Warsztaty</h2>
            </a>
            <a className={styles['shop-navigation-item']} style={{backgroundImage:`url(${workshops})`}}>
              <div className={styles['shop-navigation-overlay']}></div>
              <h2 className={styles['shop-navigation-title']}>Narzędzia</h2>
            </a>
            <a className={styles['shop-navigation-item']} style={{backgroundImage:`url(${devices})`}}>
              <div className={styles['shop-navigation-overlay']}></div>
              <h2 className={styles['shop-navigation-title']}>Urządzenia</h2>
            </a>
          </nav>
        </article>
      </main>
    </div>
    <footer className={styles["footer"]}>
      <ul className={styles["footer-list"]}>
        <li className={styles["footer-list-item"]}>
          <a className={styles["footer-link"]}>
            <img src={mapIcon} className={styles["footer-icon"]}></img>
            Paweł Kleszcz <br/> ul. Wieńcowa 5/32 <br/> 93-390, Łódź
          </a>
        </li>
        <li className={styles["footer-list-item"]}>
          <a className={styles["footer-link"]}>
            <img src={mobileIcon} className={styles["footer-icon"]}></img>
            600-500-400
          </a>
        </li>
        <li className={styles["footer-list-item"]}>
          <a className={styles["footer-link"], styles["footer-logo"]}>
            J&P
          </a>
        </li>
        <li className={styles["footer-list-item"]}>
          <a className={styles["footer-link"]}>
            <img src={mailIcon} className={styles["footer-icon"]}></img>
            p.kleszcz@gmail.com
          </a>
        </li>
        <li className={styles["footer-list-item"]}>
          <a className={styles["footer-link"]}>
            <img src={facebookIcon} className={styles["footer-icon"]}></img>
            facebook.com/j&p
          </a>
        </li>
      </ul>
    </footer>
  </>
)

export default HomePage