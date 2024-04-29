import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { cleareStatus } from "./authHandler";
import { localServer, productionServer } from "./store";

const tasksUrl = `${productionServer}/reviews`;

//Create Review
export const createReview = createAsyncThunk(
  "review/createReview",
  async (reviewData, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.post(`${tasksUrl}`, reviewData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(cleareStatus());
      }
      return rejectWithValue(error.response);
    }
  }
);

//get all Review
export const getAllReviews = createAsyncThunk(
  "review/getAllReviews",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.get(`${tasksUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(cleareStatus());
      }
      return rejectWithValue(error.response);
    }
  }
);

//get Review
export const getReview = createAsyncThunk(
  "review/getReview",
  async (reviewId, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.get(`${tasksUrl}/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(cleareStatus());
      }
      return rejectWithValue(error.response);
    }
  }
);

//update Review
export const updateReview = createAsyncThunk(
  "review/updateReview",
  async (reviewData, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.put(`${tasksUrl}/${reviewData.id}`, reviewData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(cleareStatus());
      }
      return rejectWithValue(error.response);
    }
  }
);

//delete Review
export const deleteReview = createAsyncThunk(
  "review/deleteReview",
  async (reviewId, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.delete(`${tasksUrl}/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(cleareStatus());
      }
      return rejectWithValue(error.response);
    }
  }
);

export const getAllReviewsOnCourse = createAsyncThunk(
  "review/getAllReviewsOnCourse",
  async (courseId, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.get(`${tasksUrl}/courseReviews/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(cleareStatus());
      }
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  reviews: [],
  reviewsOnCourse: [],
  review: {},
  isLoading: false,
  isSuccess: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    resetReviewsState: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = null;
      state.reviews = [];
      state.reviewsOnCourse = [];
      state.review = {};
    },
  },
  extraReducers: (builder) => {
    //create Review builder
    builder
      .addCase(createReview.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(createReview.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createReview.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = payload.data.message;
      });

    //get all Reviews builder
    builder
      .addCase(getAllReviews.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(getAllReviews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reviews = payload.data.doc;
      })
      .addCase(getAllReviews.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = payload.data.message;
      });

    //get Review builder
    builder
      .addCase(getReview.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(getReview.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.review = payload.data.doc;
      })
      .addCase(getReview.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = payload.data.message;
      });

    //update Review builder
    builder
      .addCase(updateReview.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(updateReview.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateReview.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = payload.data.message;
      });

    //delete Review builder
    builder
      .addCase(deleteReview.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(deleteReview.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteReview.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = payload.data.message;
      });

    //get all Reviews on Course builder
    builder
      .addCase(getAllReviewsOnCourse.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(getAllReviewsOnCourse.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reviewsOnCourse = payload.data.reviews;
      })
      .addCase(getAllReviewsOnCourse.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = payload.data.message;
      });
  },
});

export const reviewsActions = reviewsSlice.actions;
export default reviewsSlice.reducer;
