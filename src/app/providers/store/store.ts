import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";

import { slideReducer } from "../../../entities/Slide";
import { authReducer } from "../../../features/auth";

const persistConfig = {
  key: "root",
  storage: localStorage,
  whitelist: ["slides", "auth"],
};

const rootReducer = combineReducers({
  slides: slideReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
