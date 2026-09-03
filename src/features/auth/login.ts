import { createSlice } from "@reduxjs/toolkit";

export const AUTH_TOKEN_STORAGE_KEY = "authToken";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: Boolean(localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state) => {
      state.isAuthenticated = true;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
