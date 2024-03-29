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

  handleSubmit = async (event) => {
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) { 
      alert('Passwords need to be same')
      return
    }
    try {
      const userCredentials = await auth.createUserWithEmailAndPassword(email, password)
      await saveUserInDB(userCredentials.user, {displayName})
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    }
    catch(error) {
      console.log("Can't sign up the user " + error)
    };
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
            label="nazwa"
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
            label="hasło"
            labelFor="password"
            type="password"
            name="password"
            id="password"
            required
          />
          <Input
            handleChange={this.handleChange}
            value={confirmPassword}
            label="potwierdzenie hasła"
            labelFor="confirmPassword"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
          />
          <CustomButton type="submit">Utwórz konto</CustomButton>
        </form>
      </>
    )
  }
}

export default SignUp