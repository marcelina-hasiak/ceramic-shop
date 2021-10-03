import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import {Route, useRouteMatch} from "react-router-dom";
import CollectionPage from '../collection/collection.component';
const ShopPage = () => {
  const {path} = useRouteMatch()
  return (
    <div >
      <Route exact path={`${path}`}>
        <CollectionOverview />
      </Route>
      <Route path={`${path}/:collectionID`}>
        <CollectionPage />
      </Route>
  </div>
)}


export default ShopPage