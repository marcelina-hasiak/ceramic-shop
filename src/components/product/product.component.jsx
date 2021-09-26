import React from 'react';
import styles from './product.module.scss'
import { connect } from 'react-redux'
import { addItemToCart } from '../../redux/cart/cart.action';
import CustomButton from '../custom-button/custom-button.component'

const Product = ({item, addItemToCart}) => {
  const {name, imageSrc, price } = item
  return (
  <article className={styles["product-wrapper"]}>
    <img className={styles["product-image"]} src={imageSrc} alt=''></img>
    <div className={styles["product-details"]}>
      <h3 className={styles["product-title"]}>{name}</h3>
      <p className={styles["product-price"]}>{price}zł</p>
    </div>
    <CustomButton onClick={() => addItemToCart(item)} >Dodaj do koszyka</CustomButton>
  </article>
)}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(Product)