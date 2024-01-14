import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: { auth: authReducer },

  middleware: (call_back) =>
    call_back({
      serializableCheck: false,
    }),
});

export default store;
