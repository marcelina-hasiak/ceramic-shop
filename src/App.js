import styles from './App.module.scss';
import {
  Switch,
  Route
} from "react-router-dom";

import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import ShopPage from './pages/shopPage/shopPage.component';

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

function App() {
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
            </Switch>
          </section>
        </main>
      </div>
      <Footer/>
    </>
  );
}

export default App;
