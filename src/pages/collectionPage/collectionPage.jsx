import React from 'react';
import { connect } from 'react-redux';
import CollectionsItem from '../../components/collectionItem/collectionItem';
import { selectCollections } from '../../redux/shop/shopSelector';
import './collectionPage.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collectionPage">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionsItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollections(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
