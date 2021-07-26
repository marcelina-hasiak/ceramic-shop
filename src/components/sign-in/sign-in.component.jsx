import React from 'react'
import styles from './sign-in.module.scss'

import Input from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { email, password } = this.state
    return (
      <>
        <h2 className={styles['form-title']}>Posiadam już konto</h2>
        <span className={styles['form-subtitle']}>Zaloguj się za pomocą swojego maila i hasła</span>
        <form onSubmit={this.handleSubmit} className={styles['form']}>
          {/* reduce number of string prop? */}
          <Input 
            handleChange={this.handleChange}
            value={email} 
            label="email"
            labelFor="email"
            type="email" 
            name="email" 
            id="email" 
            required
          />
          <Input
            handleChange={this.handleChange}
            value={password}
            label="password"
            labelFor="password"
            type="password"
            name="password"
            id="password"
            required
          />
          <div className={styles['sign-in-button-wrapper']}>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isSignInWithGoogle>Sign in with google</CustomButton>
          </div>
        </form>
      </>
    )
  }
}

export default SignIn
