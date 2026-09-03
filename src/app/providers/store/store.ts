import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../../../features/add-slide/slices/slideSlice";
import authReducer from "../../../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    slides: slideReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
