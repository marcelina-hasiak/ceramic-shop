import React from 'react'
import styles from './form-input.module.scss'

const Input = ({ label, handleChange, labelFor, otherProps }) => (
  <p>
    {label ? <label for={labelFor}>{label}</label> : null}
    <input onChange={handleChange} {...otherProps} />
  </p>
)

export default Input
