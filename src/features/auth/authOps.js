import { createAsyncThunk } from "@reduxjs/toolkit";
import BaseUrl from "../../api/baseUrl";

export const logInStatusCheck = createAsyncThunk(
  "auth/logInStatusCheck",
  async (_, thunkAPI) => {
    const res = await BaseUrl.get("/api/auth/loggedin").catch((error) => {
      if (!error.response) throw error;
      return thunkAPI.rejectWithValue(error.response.data);
    });
    return res.data;
  }
);

export const logInUser = createAsyncThunk(
  "auth/logInUser",
  async (logInInfo, thunkAPI) => {
    const res = await BaseUrl.post("/api/auth/signin", logInInfo).catch(
      (error) => {
        if (!error.response) throw error;
        return thunkAPI.rejectWithValue(error.response.data);
      }
    );
    return res.data;
  }
);

export const logOutUser = createAsyncThunk(
  "auth/logOutUser",
  async (_, thunkAPI) => {
    await BaseUrl.get("/api/auth/signout").catch((error) => {
      if (!error.response) throw error;
      return thunkAPI.rejectWithValue(error.response.data);
    });
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (registerationInfo, thunkAPI) => {
    const res = await BaseUrl.post(
      "/api/auth/register",
      registerationInfo
    ).catch((error) => {
      if (!error.response) throw error;
      return thunkAPI.rejectWithValue(error.response);
    });
    return res;
  }
);
