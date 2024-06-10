import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
	firstName: string | null;
	username: string | null;
	lastName: string | null;
	isLoading: boolean;
	isLoggedIn: boolean;
	email: string | null;
	token: string | null;
}

const initialState: AuthState = {
	username: null,
	firstName: null,
	lastName: null,
	isLoading: false,
	isLoggedIn: false,
	email: null,
	token: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		saveToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
		updateUser: (state, action: PayloadAction<any>) => {
			const { first_name, last_name, email, username } = action.payload;
			state.firstName = first_name;
			state.lastName = last_name;
			state.email = email;
			state.username = username;
		},
		logout: (state) => {
			state.isLoggedIn = false;
			state.email = null;
		},
	},
});

export const { saveToken, logout, updateUser } = authSlice.actions;

export default authSlice.reducer;
