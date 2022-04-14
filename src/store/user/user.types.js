const UserTypes = {
	FETCH_CURRENT_USER: 'USER/FETCH_CURRENT_USER',
	SET_CURRENT_USER: 'USER/SET_CURRENT_USER',
	SET_CURRENT_USER_MESSAGE: 'USER/SET_CURRENT_USER_MESSAGE',
	CHECK_USER_SESSION: 'USER/CHECK_USER_SESSION',
	GOOGLE_SIGN_IN_START: 'USER/GOOGLE_SIGN_IN_START',
	EMAIL_SIGN_IN_START: 'USER/EMAIL_SIGN_IN_START',
	EMAIL_PASS_SIGN_UP_SUCCESS: 'USER/EMAIL_PASS_SIGN_UP_SUCCESS',
	CREATE_USER_FROM_EMAIL_AND_PASSWORD:
		'USER/CREATE_USER_FROM_EMAIL_AND_PASSWORD',
	SIGN_IN_SUCCESS: 'USER/SIGN_IN_SUCCESS',
	SIGN_IN_FAILED: 'USER/SIGN_IN_FAILED',
	SIGN_OUT: 'USER/SIGN_OUT',
}

export default UserTypes
