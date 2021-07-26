import React from 'react'
import styles from './custom-button.module.scss'

const CustomButton = ({children, isSignInWithGoogle, ...otherProps}) => (
  <button className= {`${isSignInWithGoogle ? styles['google-button'] : ''} ${styles['custom-button']}` }  {...otherProps}>{children}</button>
)

export default CustomButton