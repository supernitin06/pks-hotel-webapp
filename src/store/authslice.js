import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,  // Store token directly
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    adduser: (state, action) => {
      state.token = action.payload;  // Directly update token
    },
    removeuser: (state) => {
      state.token = null;
      localStorage.removeItem("persist:auth"); // Remove persisted token
    },
    
  },
});

export const { adduser, removeuser } = authSlice.actions;
export default authSlice.reducer;
