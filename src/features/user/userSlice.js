import { getAllUsers } from "./userOps";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: {},
  isLoading: true,
  error: {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.users = payload.users;
        state.error = {};
      })

      .addCase(getAllUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.users = [];
        state.error = payload;
      });
  },
});

export default userSlice.reducer;
