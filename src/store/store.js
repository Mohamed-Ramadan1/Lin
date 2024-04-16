import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./userSlice";

const store = configureStore({ reducer: { userReducers } });

export default store;
