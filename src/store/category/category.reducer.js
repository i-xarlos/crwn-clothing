import DIRECTORY_DATA from './category.data'

const initialState = {
	categories: DIRECTORY_DATA,
}

const categoryReducer = (state = initialState, action) => {
	const { type } = action

	switch (type) {
		default:
			return state
	}
}

export default categoryReducer
