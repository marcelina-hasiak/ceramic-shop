import React from "react";
import styles from './cart-dropdown.module.scss'
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { connect } from "react-redux";

const CartDropdown = ({cartItems}) => {
  console.log(cartItems)
  return (
    <div className={styles["cart-dropdown-wrapper"]}>
      <CustomButton children='Go to checkout'/>
      <ul className={styles["cart-items-list"]}>
        {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem}/>
          ))
        }
      </ul>
    </div>
  )
}

const mapStateToProps = ({cart: {cartItems}}) => {
  return {cartItems}
  
} 

export default connect(mapStateToProps)(CartDropdown)