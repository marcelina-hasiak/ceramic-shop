import React from 'react'
import styles from './sign-in-and-sing-up.module.scss'

import SignIn from '../../components/sign-in/sign-in.component'

const SignInAndSignUpPage = () => (
  <div className={styles['forms-wrapper']}>
    <SignIn/>
  </div>
)

export default SignInAndSignUpPage