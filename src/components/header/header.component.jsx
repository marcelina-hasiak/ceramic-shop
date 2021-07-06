import React from 'react';
import styles from './header.module.scss'
import {
  Link
} from "react-router-dom";

import contactIcon from '../../assets/icons/contact-icon.svg'
import signInIcon from '../../assets/icons/sign-in-icon.svg'
import shoppingCartIcon from '../../assets/icons/shopping-cart-icon.svg'


const Header = () => (
  <header className={styles["header"]}>
    <div className={styles["logo-and-title-wrapper"]}>
      <Link to="/" className={styles["site-logo"]}>J&P</Link>
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
)

export default Header