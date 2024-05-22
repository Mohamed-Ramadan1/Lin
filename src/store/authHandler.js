import { createAsyncThunk } from "@reduxjs/toolkit";

import { adminActions } from "./adminSlice";
import { courseEnrollmentsActions } from "./courseEnrollmentsSlice";
import { courseActions } from "./courseSlice";
import { reviewsActions } from "./reviewsSlice";
import { userActions } from "./userSlice";

export const cleareStatus = createAsyncThunk(
  "auth/cleareStatus",
  async (_, { dispatch }) => {
    try {
      dispatch(adminActions.resetAdminState());
      dispatch(courseEnrollmentsActions.resetCourseEnrollments());
      dispatch(courseActions.resetCourseState());
      dispatch(reviewsActions.resetReviewsState());
      dispatch(userActions.handelUnAuthorizedUser());
      return true;
    } catch (error) {
      console.error("Error clearing application state:", error);
      return Promise.reject(error); // Reject with error for potential error handling
    }
  }
);
