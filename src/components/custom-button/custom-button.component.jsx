import React from 'react'
import styles from './custom-button.module.scss'

const CustomButton = ({children, otherProps}) => (
  <button className={styles['custom-button']} {...otherProps}>{children}</button>
)

export default CustomButton