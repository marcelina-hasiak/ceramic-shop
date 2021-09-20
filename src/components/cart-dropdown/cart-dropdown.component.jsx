import React from "react";
import styles from './cart-dropdown.module.scss'
import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = () => {
  return (
    <div className={styles["cart-dropdown-wrapper"]}>
      <CustomButton children='Go to checkout'/>
      <ul className={styles["cart-items-list"]}></ul>
    </div>
  )
}

export default CartDropdown