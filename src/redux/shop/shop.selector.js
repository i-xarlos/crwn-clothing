import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections,
);

export const selecrCollectionsForPreview = createSelector(
	[selectCollections],
	(collections) => Object.keys(collections).map((key) => collections[key]),
);

export const selecrCollection = (collectionUrlParam) => {
	return createSelector(
		[selectCollections],
		(collections) => collections[collectionUrlParam],
	);
};
