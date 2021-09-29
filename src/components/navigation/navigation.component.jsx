import React from 'react';
import NavigationItem from '../navigation-item/navigation-item'
import styles from './navigation.module.scss'
import { selectItems } from '../../redux/collections/collections.selectors'
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux';


const Navigation = ({items}) => (
  <nav className={styles['shop-navigation']}> 
  {
    items.map((item, id) => (
      <NavigationItem key={id} {...item}/>
    ))
  }
  </nav>
)

const mapStateToProps = createStructuredSelector({
  items: selectItems
}) 

export default connect(mapStateToProps)(Navigation)