import React from 'react'
import styles from './sign-up.module.scss'

import {saveUserInDB, auth} from '../../firebase/firebase.utils'

import Input from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <>
        <h2 className={styles['form-title']}>Chcę założyć konto</h2>
        <span className={styles['form-subtitle']}>Zaloguj się za pomocą swojego maila i hasła</span>
        <form onSubmit={this.handleSubmit} className={styles['form']}>
          {/* reduce number of string prop? */}
          <Input 
            handleChange={this.handleChange}
            value={displayName} 
            label="displayName"
            labelFor="display name"
            type="text" 
            name="displayName" 
            id="displayName" 
            required
          />
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
          <Input
            handleChange={this.handleChange}
            value={confirmPassword}
            label="confirm password"
            labelFor="confirmPassword"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
          />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </>
    )
  }
}

export default SignUp