import React from 'react'
import styles from './form-input.module.scss'

const Input = ({ label, handleChange, labelFor, ...otherProps }) => (
  <p className={styles['input-wrapper']}>
    {label ? <label htmlFor={labelFor} className={styles['label']}>{label}</label> : null}
    <input className={styles['input']} onChange={handleChange} {...otherProps} />
  </p>
)

export default Input
