import { configureStore } from '@reduxjs/toolkit';
import dropDowns from 'src/features/constent/dropdowns.slice';
import authReducer from '../features/auth/auth.slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
	key: 'auth',
	storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
	reducer: {
		auth: persistedReducer,
		dropdowns: dropDowns,
	},
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { store, persistor };
