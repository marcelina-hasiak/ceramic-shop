import React from "react";
import styles from './cart-item.module.scss'

const CartItem = ({cartItem}) => {
  const {name, imageSrc, price, quantity} = cartItem
  return (
    <li className={styles["cart-item-wrapper"]}>
      <img className={styles["cart-item-image"]} src={imageSrc} alt=''/>
      <div className={styles["cart-item-details"]}>
        <p>{name}</p>
        <p>{quantity}x{price}zł</p>
      </div>
    </li>
  )
}

export default CartItem