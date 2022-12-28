import {
  configureStore,
  combineReducers,
  // getDefaultMiddleware,
} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import {persistReducer} from 'redux-persist';
// import storage from "redux-persist/lib/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import clubsSlice from './slices/clubsSlice';

const reducer = combineReducers({
  user: userSlice,
  clubs: clubsSlice,
});

const persistConfig = {
  key: 'sportyma',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // middleware: [
  //   ...getDefaultMiddleware({
  //     //   serializableCheck: false,
  //   }),
  // ],
});

export default store;
