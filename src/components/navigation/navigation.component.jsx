import React from 'react';
import NavigationItem from '../navigation-item/navigation-item'
import styles from './navigation.module.scss'
import clay from '../../assets/images/clay-nav.jpg'
import glaze from '../../assets/images/glaze-nav.jpg'
import tools from '../../assets/images/tools-nav.jpg'
import workshops from '../../assets/images/workshops-nav.jpg'
import devices from '../../assets/images/devices-nav.jpg'

class Navigation extends React.Component {
  state = {
    shopNavigationItems: [
      {
        title: 'clay',
        bgImage: clay
      },
      {
        title: 'glaze',
        bgImage: glaze
      },
      {
        title: 'tools',
        bgImage: tools
      },
      {
        title: 'workshops',
        bgImage: workshops
      },
      {
        title: 'devices',
        bgImage: devices
      }
    ]
  }
  render() {
    return (
      <nav className={styles['shop-navigation']}> 
      {
        this.state.shopNavigationItems.map(({title, bgImage}, id) => (
          <NavigationItem title={title} bgImage={bgImage} key={id}/>
        ))
      }
    </nav>
    )
  }
}

export default Navigation