import React from "react";
import { Link } from "react-router-dom";
import styles from './cart-dropdown.module.scss'
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { setCartVisibility } from "../../redux/cart/cart.action";

import { connect } from "react-redux";

const CartDropdown = ({cartItems, dispatch}) => (
  <div className={styles["cart-dropdown-wrapper"]}>
    <Link children='Przejdź do kasy' to="/kasa" onClick={() => dispatch(setCartVisibility())}/>
    <ul className={styles["cart-items-list"]}>
      {cartItems.length 
        ? cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem}/>
        ))
        : <p>Brak produktów w koszyku</p>
      }
    </ul>
  </div>
)


const mapStateToProps = state => ({cartItems: selectCartItems(state)})

export default connect(mapStateToProps)(CartDropdown)