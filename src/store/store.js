import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: { auth: authReducer, users: userReducer },

  middleware: (call_back) =>
    call_back({
      serializableCheck: false,
    }),
});

export default store;
