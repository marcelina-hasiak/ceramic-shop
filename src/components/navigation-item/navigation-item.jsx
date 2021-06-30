import React from 'react';
import styles from './navigation-item.module.scss'

const NavigationItem = ({title, bgImage}) => (
  <a className={styles['shop-navigation-item']} style={{backgroundImage:`url(${bgImage})`}}>
    <div className={styles['shop-navigation-overlay']}></div>
    <h2 className={styles['shop-navigation-title']}>{title}</h2>
  </a>
)

export default NavigationItem