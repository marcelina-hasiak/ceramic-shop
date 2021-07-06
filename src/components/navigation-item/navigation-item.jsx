import React from 'react';
import styles from './navigation-item.module.scss'
import {
  Link
} from "react-router-dom";

const NavigationItem = ({bgImage, title, slug}) => {
  return (
  <Link to={`${slug}`} className={styles['shop-navigation-item']} style={{backgroundImage:`url(${bgImage})`}}>
    <div className={styles['shop-navigation-overlay']}></div>
    <h2 className={styles['shop-navigation-title']}>{title}</h2>
  </Link>
  )
}

export default NavigationItem