import React from 'react';
import Product from '../product/product.component';
import styles from './products-preview.module.scss'

const ProductsPreview = ({title, items}) => (
  <div className={styles["products-wrapper"]}>
    <h2 className={styles["products-title"]}>{title}</h2>
    <div className={styles["product-wrapper"]}>
      {items
        .filter((item, index) => index < 4)
        .map(({id, ...restProps}) => (
          <Product key={id} {...restProps}/>
        ))}
    </div>
  </div>
)

export default ProductsPreview