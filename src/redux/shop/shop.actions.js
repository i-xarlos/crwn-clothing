import type from './shop.types';

export const updateCollections = (collectionsMap) => ({
	type: type.UPDATE_COLLECTIONS,
	payload: collectionsMap,
});
