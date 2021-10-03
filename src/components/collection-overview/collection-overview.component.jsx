import React from "react";
import ProductsPreview from '../products-preview/products-preview.component'
import {selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';

const CollectionOverview = ({collectionItems}) => (
  <div>
    {
      collectionItems.map(({id, ...restProps}) => (
        <ProductsPreview key={id} {...restProps}/>
      ))
    }
  </div>
)
const mapStateToProps = createStructuredSelector({
  collectionItems: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)