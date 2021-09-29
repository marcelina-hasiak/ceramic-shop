import React from 'react';

import ProductsPreview from '../../components/products-preview/products-preview.component'
import {selectCollectionItems } from '../../redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';

const ShopPage = ({collectionItems}) => (
  <>
    {
      collectionItems.map(({id, ...restProps}) => (
        <ProductsPreview key={id} {...restProps}/>
      ))
    }
  </>
)

const mapStateToProps = createStructuredSelector({
  collectionItems: selectCollectionItems
})

export default connect(mapStateToProps)(ShopPage)