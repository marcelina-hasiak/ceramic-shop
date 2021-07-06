import React from 'react';
import styles from './footer.module.scss'

import facebookIcon from '../../assets/icons/facebook-icon.svg' 
import mailIcon from '../../assets/icons/mail-icon.svg'
import mapIcon from '../../assets/icons/map-icon.svg'
import mobileIcon from '../../assets/icons/mobile-icon.svg'

const Footer = () => (
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
)

export default Footer