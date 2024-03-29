import React from 'react';
import styles from './header.module.scss'
import {
  Link
} from "react-router-dom";
import {auth} from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import contactIcon from '../../assets/icons/contact-icon.svg'
import signInIcon from '../../assets/icons/sign-in-icon.svg'
import signOutIcon from '../../assets/icons/sign-out-icon.svg'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


const Header = ({currentUser, hidden}) =>(
  <header className={styles["header"]}>
    <div className={styles["logo-and-title-wrapper"]}>
      <Link to="/" className={styles["site-logo"]}>J&P</Link>
      <h1 className={styles["site-name"]}>Ceramic Boat</h1>
    </div>
    <nav className={styles["site-navigation"]}>
      <Link to='' className={styles["site-navigation-link"]}>
        <img src={contactIcon} className={styles["site-navigation-icon"]} alt=""></img>
        Kontakt
      </Link>
      { currentUser 
        ? (
          // move signOut function to another and handle the response
          <Link onClick={() => auth.signOut()} to='/' className={styles["site-navigation-link"]}>
            <img src={signOutIcon} className={styles["site-navigation-icon"]} alt=""></img>
            Wyloguj się
          </Link>
        ) 
        : (
          <Link to='/logowanie' className={styles["site-navigation-link"]}>
            <img src={signInIcon} className={styles["site-navigation-icon"]} alt=""></img>
            Zaloguj się
          </Link>
        )
      }
      <Link to='/sklep' className={styles["site-navigation-link"]}>
        Sklep
      </Link>
      <CartIcon/>
      {hidden ? null : <CartDropdown/>}
    </nav>
  </header>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)