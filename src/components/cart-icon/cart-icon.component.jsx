import React from 'react'
import styles from './cart-icon.module.scss'

import { connect } from 'react-redux'
import { setCartVisibility } from '../../redux/cart/cart.action'

import { ReactComponent as ShoppingCartIcon } from '../../assets/icons/shopping-cart-icon.svg'

const CartIcon = ({setCartVisibility}) => {
  return (
    <button onClick={ ()=>setCartVisibility() } className={styles["cart-icon-wrapper"]}>
      <ShoppingCartIcon className={styles["cart-icon"]}/>
      <span className={styles["items-counter"]}> 0 </span>
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  setCartVisibility: () => dispatch(setCartVisibility())
})

export default connect(null, mapDispatchToProps)(CartIcon)