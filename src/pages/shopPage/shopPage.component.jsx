import React from 'react';
import SHOP_PRODUCTS_DATA from './shop.data'
import ProductsPreview from '../../components/products-preview/products-preview.component'

class ShopPage extends React.Component {
  state = {
    shopProducts: SHOP_PRODUCTS_DATA
  }
  render() {
    const {shopProducts} = this.state
    return (
      <>
        {
          shopProducts.map(({id, ...restProps}) => (
            <ProductsPreview key={id} {...restProps}/>
          ))
        }
      </>
    )
  }

}

export default ShopPage