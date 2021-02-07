import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections,
);

export const selectCollectionForPreview = createSelector(
  [selectShopCollection],
  (collection) => Object.keys(collection).map((key) => collection[key]),
);

export const selectCollections = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopCollection],
    (collections) => collections[collectionUrlParam],
  ),
);
