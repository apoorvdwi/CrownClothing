import React from 'react';
import { connect } from 'react-redux';
import './collectionsOverview.scss';
import CollectionPreview from '../collectionPreview/collectionPreview';
import { selectCollectionForPreview } from '../../redux/shop/shopSelector';
import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({ collections }) => (
  <div className="collectionsOverview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
