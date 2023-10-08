import { createSlice } from '@reduxjs/toolkit';

interface DropDowns {
	sizes: string[];
}

const initialState: DropDowns = {
	sizes: ['S', 'L', 'XL', 'XXL'],
};

export const dropDowns = createSlice({
	name: 'dropdowns',
	initialState,
	reducers: {},
});

export default dropDowns.reducer;
