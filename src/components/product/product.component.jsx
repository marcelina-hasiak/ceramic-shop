import React from 'react';
import styles from './product.module.scss'

const Product = ({name, imageSrc, price}) => (
  <article className={styles["product-wrapper"]}>
    <img className={styles["product-image"]} src={imageSrc} alt=''></img>
    <div className={styles["product-details"]}>
      <h3 className={styles["product-title"]}>{name}</h3>
      <p className={styles["product-price"]}>{price}zł</p>
    </div>
  </article>
)

export default Product