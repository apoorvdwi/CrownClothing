import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview';
import CollectionPage from '../collectionPage/collectionPage';
const ShopPage = ({ match }) => {
  return (
    <div className="shopPage">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
