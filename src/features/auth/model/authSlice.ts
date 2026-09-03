import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "./types";

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action: { payload: string }) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;