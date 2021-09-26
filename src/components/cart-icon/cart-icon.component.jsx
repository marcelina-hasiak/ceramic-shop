import React from 'react'
import styles from './cart-icon.module.scss'

import { connect } from 'react-redux'
import { setCartVisibility } from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppingCartIcon } from '../../assets/icons/shopping-cart-icon.svg'

const CartIcon = ({ setCartVisibility, quantity }) => {
  return (
    <button onClick={setCartVisibility} className={styles['cart-icon-wrapper']}>
      <ShoppingCartIcon className={styles['cart-icon']} />
      <span className={styles['items-counter']}> {quantity} </span>
    </button>
  )
}

const mapStateToProps = state => {
  return {
    quantity: selectCartItemsCount(state)
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCartVisibility: () => dispatch(setCartVisibility()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
