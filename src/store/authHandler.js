import { createAsyncThunk } from "@reduxjs/toolkit";

import { userActions } from "./userSlice";

export const cleareStatus = createAsyncThunk(
  "auth/cleareStatus",
  async (_, { dispatch }) => {
    try {
      dispatch(userActions.handelUnAuthorizedUser());
      return true;
    } catch (error) {
      console.error("Error clearing application state:", error);
      return Promise.reject(error); // Reject with error for potential error handling
    }
  }
);
