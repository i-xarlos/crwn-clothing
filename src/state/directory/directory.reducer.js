import DIRECTORY_DATA from './directory.data';

const initialState = {
	sections: DIRECTORY_DATA,
};

const directoryReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
