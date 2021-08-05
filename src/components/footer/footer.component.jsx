import React from 'react';
import {
  Link
} from "react-router-dom";
import styles from './footer.module.scss'

import facebookIcon from '../../assets/icons/facebook-icon.svg' 
import mailIcon from '../../assets/icons/mail-icon.svg'
import mapIcon from '../../assets/icons/map-icon.svg'
import mobileIcon from '../../assets/icons/mobile-icon.svg'

const Footer = () => (
  <footer className={styles["footer"]}>
    <ul className={styles["footer-list"]}>
      <li className={styles["footer-list-item"]}>
        <Link to='' className={styles["footer-link"]}>
          <img src={mapIcon} className={styles["footer-icon"]} alt=""></img>
          Paweł Kleszcz <br/> ul. Wiankowa 5/32 <br/> 93-390, Łódź
        </Link>
      </li>
      <li className={styles["footer-list-item"]}>
        <Link to='' className={styles["footer-link"]}>
          <img src={mobileIcon} className={styles["footer-icon"]} alt=""></img>
          600-500-400
        </Link>
      </li>
      <li className={styles["footer-list-item"]}>
        <Link to='' className={`${styles["footer-link"]} ${styles["footer-logo"]}`}>
          J&P
        </Link>
      </li>
      <li className={styles["footer-list-item"]}>
        <Link to='' className={styles["footer-link"]}>
          <img src={mailIcon} className={styles["footer-icon"]} alt=""></img>
          p.kleszcz@gmail.com
        </Link>
      </li>
      <li className={styles["footer-list-item"]}>
        <Link to='' className={styles["footer-link"]}>
          <img src={facebookIcon} className={styles["footer-icon"]} alt=""></img>
          facebook.com/j&p
        </Link>
      </li>
    </ul>
  </footer>
)

export default Footer