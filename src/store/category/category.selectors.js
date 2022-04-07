import { createSelector } from 'reselect'

const selectCategory = state => state.category

export const selectCategories = createSelector(
	[selectCategory],
	category => category.categories
)
