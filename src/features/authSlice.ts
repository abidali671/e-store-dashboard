// slices/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isLoggedIn: boolean;
    email: string | null;
}

const initialState: AuthState = {
    isLoggedIn: false,
    email: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.isLoggedIn = true;
            state.email = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.email = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
