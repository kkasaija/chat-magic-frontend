import BaseUrl from "../../api/baseUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, thunkAPI) => {
    const res = await BaseUrl.get("/api/users").catch((error) => {
      if (!error.response) throw error;
      return thunkAPI.rejectWithValue(error.response.data);
    });
    return res.data;
  }
);
