import { configureStore } from '@reduxjs/toolkit';
import dropDowns from 'src/features/dropdowns';
import authReducer from '../features/auth/auth.slice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		dropdowns: dropDowns,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
