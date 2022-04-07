import DIRECTORY_DATA from './category.data'

const initialState = {
	categories: DIRECTORY_DATA,
}

const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default categoryReducer
