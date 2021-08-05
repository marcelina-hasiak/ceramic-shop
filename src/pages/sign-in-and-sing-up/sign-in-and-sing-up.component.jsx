import React from 'react'
import styles from './sign-in-and-sing-up.module.scss'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignUpPage = () => (
  <div className={styles['forms-wrapper']}>
    <div className={styles['form-wrapper']} style={{paddingRight:'2vw' }}>
      <SignIn/>
    </div>
    <div className={styles['form-wrapper']} style={{paddingLeft:'2vw' }}>
      <SignUp/>
    </div>
  </div>
)

export default SignInAndSignUpPage