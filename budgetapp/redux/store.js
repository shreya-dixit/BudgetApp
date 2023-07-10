/* eslint-disable prettier/prettier */
//import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
//import {storage} from 'redux-persist/lib/storage';
//import { createStore } from 'redux';
import { legacy_createStore as createStore} from 'redux';
// const store = configureStore({
//     reducer:rootReducer,
// });
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export default store;

