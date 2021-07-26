import React from 'react';
import styles from './header.module.scss'
import {
  Link
} from "react-router-dom";
import {auth} from '../../firebase/firebase.utils'

import contactIcon from '../../assets/icons/contact-icon.svg'
import signInIcon from '../../assets/icons/sign-in-icon.svg'
import signOutIcon from '../../assets/icons/sign-out-icon.svg'
import shoppingCartIcon from '../../assets/icons/shopping-cart-icon.svg'


const Header = ({isLogged}) => (
  <header className={styles["header"]}>
    <div className={styles["logo-and-title-wrapper"]}>
      <Link to="/" className={styles["site-logo"]}>J&P</Link>
      <h1 className={styles["site-name"]}>Ceramic Boat</h1>
    </div>
    <nav className={styles["site-navigation"]}>
      <Link to='' className={styles["site-navigation-link"]}>
        <img src={contactIcon} className={styles["site-navigation-icon"]}></img>
        Contact
      </Link>
      { isLogged 
        ? (
          <Link onClick={() => auth.signOut()} to='/' className={styles["site-navigation-link"]}>
            <img src={signOutIcon} className={styles["site-navigation-icon"]}></img>
            Sign out
          </Link>
        ) 
        : (
          <Link to='/logowanie' className={styles["site-navigation-link"]}>
            <img src={signInIcon} className={styles["site-navigation-icon"]}></img>
            Sign in
          </Link>
        )
      }
      <Link to='' className={styles["site-navigation-link"]}>
        <img src={shoppingCartIcon} className={styles["site-navigation-icon"]}></img>
        My cart
      </Link>
    </nav>
  </header>
)

export default Header