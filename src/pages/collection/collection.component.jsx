import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import Product from '../../components/product/product.component'
import { withRouter } from 'react-router';

const CollectionPage = ({collection}) => {
  console.log(collection)
  return(
  <div>
    {collection.items.map((item) => (
      <Product key={item.id} item={item}/>
    ))}
  </div>
)}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionID)(state)
})

export default withRouter(connect(mapStateToProps)(CollectionPage))
  
