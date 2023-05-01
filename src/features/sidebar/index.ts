import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavbarState {
    isOpen: boolean;
}

const initialState: NavbarState = {
    isOpen: window.innerWidth >= 600 && true,
};

const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        openNavbar(state) {
            state.isOpen = true;
        },
        closeNavbar(state) {
            state.isOpen = false;
        },
        toggleNavbar(state) {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { openNavbar, closeNavbar, toggleNavbar } = navbarSlice.actions;

export default navbarSlice.reducer;
