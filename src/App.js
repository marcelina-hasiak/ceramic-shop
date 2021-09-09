import styles from './App.module.scss';
import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action';

import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component'
import {saveUserInDB, auth} from './firebase/firebase.utils'

const ClayPage = () => (
  <div>
    <h2>Glina</h2>
  </div>
)
const GlazePage = () => (
  <div>
    <h2>Szkliwo</h2>
  </div>
)
const ToolsPage = () => (
  <div>
    <h2>Narzędzia</h2>
  </div>
)
const WorkshopsPage = () => (
  <div>
    <h2>Warsztaty</h2>
  </div>
)
const DevicesPage = () => (
  <div>
    <h2>Urządzenia</h2>
  </div>
)

class App extends React.Component {

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await saveUserInDB(userAuth)
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }) 
        })
      } else {
        setCurrentUser(userAuth)
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render() { 
    return (
    <>
      <div className={styles['header-and-main-content-wrapper']}>
        <Header/>
        <main className={styles['main-content-wrapper']}>
          <section className={styles['main-content']}>
            <Switch>
              <Route exact path='/'>
                <HomePage/>
              </Route>
              <Route path='/glina'>
                <ClayPage/>
              </Route>
              <Route path='/szkliwo'>
                <GlazePage/>
              </Route>
              <Route path='/narzedzia'>
                <ToolsPage/>
              </Route>
              <Route path='/warsztaty'>
                <WorkshopsPage/>
              </Route>
              <Route path='/urzadzenia'>
                <DevicesPage/>
              </Route>
              <Route path='/sklep'>
                <ShopPage/>
              </Route>
              <Route path='/logowanie'>
                <SignInAndSignUpPage/>
              </Route>
            </Switch>
          </section>
        </main>
      </div>
      <Footer/>
    </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(null, mapDispatchToProps)(App);
