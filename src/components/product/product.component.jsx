import React from 'react';
import styles from './product.module.scss'

const Product = ({name, imageSrc, price}) => (
  <article className={styles["product-wrapper"]}>
    <img src={imageSrc}></img>
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  </article>
)

export default Product