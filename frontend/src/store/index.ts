import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from '@/slices/auth.slice'

const persistConfig = {
	key: 'auth',
	storage,
	whitelist: ['user'],
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
