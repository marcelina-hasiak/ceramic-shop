import React from 'react'
import styles from './checkout-item.module.scss'
import { deleteItemFromCart, addItemToCart, removeItemFromCart } from '../../redux/cart/cart.action'

import { connect } from 'react-redux'

const CheckoutItem = ({cartItem, deleteItemFromCart, addItemToCart, removeItemFromCart}) => {
  const {name, imageSrc, price, quantity} = cartItem
  return (
  <div className={styles["checkout-item"]}>
    <div className={styles["image-container"]}>
      <img src={imageSrc} alt = "item"/>
    </div>
    <p className={styles["name"]}>{name}</p>
    <div className={styles["quantity"]}>
      <button onClick={() => removeItemFromCart(cartItem)} className={styles["arrow"]}>&#10094;</button>
      <p className={styles["value"]}>{quantity}</p>
      <button onClick={() => addItemToCart(cartItem)} className={styles["arrow"]}>&#10095;</button>
    </div>
    <p className={styles["price"]}>{price}</p>
    <button className={styles["remove-button"]} onClick={() => deleteItemFromCart(cartItem)} >&#10005;</button>
  </div>
)}

const mapDispatchToProps = dispatch => ({
  deleteItemFromCart: (cartItem) => dispatch(deleteItemFromCart(cartItem)),
  addItemToCart: (cartItem) => dispatch(addItemToCart(cartItem)),
  removeItemFromCart: (cartItem) => dispatch(removeItemFromCart(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)