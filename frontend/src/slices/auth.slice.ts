import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	error: null,
	loggedIn: false,
	user: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signUserStart: state => {
			state.isLoading = true
		},
		signUserSuccess: (state, action) => {
			state.loggedIn = true
			state.isLoading = false
			state.user = action.payload
		},
		signUserFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
		logoutUser: state => {
			state.user = null
			state.loggedIn = false
		},
	},
})

export const { signUserStart, signUserSuccess, signUserFailure, logoutUser } =
	authSlice.actions
export default authSlice.reducer
