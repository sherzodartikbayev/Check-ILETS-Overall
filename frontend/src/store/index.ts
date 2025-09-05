import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // localStorage ishlatadi
import AuthReducer from '@/slices/auth.slice'

const persistConfig = {
	key: 'auth',
	storage,
}

const persistedAuthReducer = persistReducer(persistConfig, AuthReducer)

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
