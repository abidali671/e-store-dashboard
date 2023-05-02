import { configureStore } from '@reduxjs/toolkit';
import dropdownsReducer from 'src/features/constent/dropdowns.slice';
import authReducer from '../features/auth/auth.slice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		dropdowns: dropdownsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
