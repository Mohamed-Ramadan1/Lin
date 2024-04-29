import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { cleareStatus } from "./authHandler";

import { localServer, productionServer } from "./store";

const enrollmentsUrl = `${productionServer}/enrolls`;

export const enrollUserToCourse = createAsyncThunk(
  "courseEnrollments/enrollUserToCourse",
  async (enrollData, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.post(`${enrollmentsUrl}`, enrollData, {
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

export const getAllEnrollments = createAsyncThunk(
  "courseEnrollments/getAllEnrollments",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.get(`${enrollmentsUrl}`, {
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

export const allEnrolledUsersOnCourse = createAsyncThunk(
  "courseEnrollments/allEnrolledUsersOnCourse",
  async (courseId, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.get(
        `${enrollmentsUrl}/enrolledUsers/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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

export const getEnrollment = createAsyncThunk(
  "courseEnrollments/getEnrollment",
  async (enrollmentId, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.get(`${enrollmentsUrl}/${enrollmentId}`, {
        headers: { Authorization: `Bearer ${token}` },
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

export const deleteEnrollment = createAsyncThunk(
  "courseEnrollments/deleteEnrollment",
  async (enrollmentId, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.delete(`${enrollmentsUrl}/${enrollmentId}`, {
        headers: { Authorization: `Bearer ${token}` },
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
  allEnrollments: [],
  courseEnrollments: [],
  allEnrolledUsersOnCourse: [],
  userEnrollments: [],
  enrollmentDocument: {},
  isSuccess: false,
  loading: false,
  error: null,
};

const courseEnrollmentsSlice = createSlice({
  name: "courseEnrollments",
  initialState,
  reducers: {
    resetCourseEnrollments: (state) => {
      state.allEnrollments = [];
      state.courseEnrollments = [];
      state.allEnrolledUsersOnCourse = [];
      state.userEnrollments = [];
      state.enrollmentDocument = {};
      state.isSuccess = false;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    //Create new enrollment builder
    builder
      .addCase(enrollUserToCourse.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(enrollUserToCourse.fulfilled, (state) => {
        state.loading = false;
        state.isSuccess = true;
      })
      .addCase(enrollUserToCourse.rejected, (state, action) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = action.payload.data.message;
      });

    //Get all enrollments
    builder
      .addCase(getAllEnrollments.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(getAllEnrollments.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.allEnrollments = action.payload.data.doc;
      })
      .addCase(getAllEnrollments.rejected, (state, action) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = action.payload.data.message;
      });

    //Get all enrolled users on course
    builder
      .addCase(allEnrolledUsersOnCourse.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(allEnrolledUsersOnCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.allEnrolledUsersOnCourse = action.payload.data.users;
      })
      .addCase(allEnrolledUsersOnCourse.rejected, (state, action) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = action.payload.data.message;
      });

    //Get enrollment
    builder
      .addCase(getEnrollment.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(getEnrollment.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.enrollmentDocument = action.payload.data.doc;
      })
      .addCase(getEnrollment.rejected, (state, action) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = action.payload.data.message;
      });

    //Delete enrollment
    builder
      .addCase(deleteEnrollment.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(deleteEnrollment.fulfilled, (state) => {
        state.loading = false;
        state.isSuccess = true;
      })
      .addCase(deleteEnrollment.rejected, (state, action) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = action.payload.data.message;
      });
  },
});

export const courseEnrollmentsActions = courseEnrollmentsSlice.actions;
export default courseEnrollmentsSlice.reducer;
