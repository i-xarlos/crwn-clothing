import { createSelector } from 'reselect'

const selectProduct = state => state.product

export const selectCollections = createSelector([selectProduct], product =>
	product.collections.reduce((acc, collection) => {
		const { title, items } = collection
		acc[title.toLowerCase()] = items
		return acc
	}, {})
)

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	collections =>
		collections
			? Object.keys(collections).map(key => ({
					items: collections[key],
					title: key,
			  }))
			: [{ items: [], title: '' }]
)

export const selectCollection = collectionUrlParam => {
	return createSelector([selectCollections], collections =>
		collections && collections[collectionUrlParam]
			? collections[collectionUrlParam]
			: []
	)
}

export const selectIsCollectionFetching = createSelector(
	[selectProduct],
	product => product.isFetching
)

export const selectIsCollectionLoaded = createSelector(
	[selectProduct],
	product => !!product.collections
)
