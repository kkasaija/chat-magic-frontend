import { createAsyncThunk } from "@reduxjs/toolkit";
import BaseUrl from "../../api/baseUrl";

export const logInStatusCheck = createAsyncThunk(
  "auth/logInStatusCheck",
  async (_, thunkAPI) => {
    try {
      const res = await BaseUrl.get("/api/auth/loggedin");
      return res.data;
    } catch (error) {
      if (!error.response) throw error;
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logInUser = createAsyncThunk(
  "auth/logInUser",
  async (logInInfo, thunkAPI) => {
    console.log(logInInfo)
    try {
      const res = await BaseUrl.post("/api/auth/signin", logInInfo);
      return res.data;
    } catch (error) {
      if (!error.response) throw error;
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
