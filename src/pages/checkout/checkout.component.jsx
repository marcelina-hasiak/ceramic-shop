import React from 'react'
import styles from './checkout.module.scss'

import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors'


const CheckoutPage = ({cartItems, cartTotalPrice}) => {
  return (
  //implement as table later
  <div className={styles["checkout-page"]}>
    <div className={styles["checkout-header"]}>
      <div className={styles["header-heading"]}>
        <p>Produkt</p>
      </div>
      <div className={styles["header-heading"]}>
        <p>Nazwa</p>
      </div>
      <div className={styles["header-heading"]}>
        <p>Ilość</p>
      </div>
      <div className={styles["header-heading"]}>
        <p>Cena</p>
      </div>
      <div className={styles["header-heading"]}>
        <p>Usuwanie</p>
      </div>
    </div>
    {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
      ))
    }
    <div className={styles["total"]}>
      <p >Razem: {cartTotalPrice}zł</p>
    </div>
  </div>
)}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage)