import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cleareStatus } from "./authHandler";
import axios from "axios";

// const courseUrl = "http://localhost:3000/api/v1/courses";

const courseUrl =
  "https://graduation-project-backend-5vtx.onrender.com/api/v1/courses";

//Create Course
export const createCourse = createAsyncThunk(
  "course/createCourse",
  async (courseData, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.post(`${courseUrl}`, courseData, {
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

//get all Course
export const getAllCourses = createAsyncThunk(
  "course/getAllCourses",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.get(`${courseUrl}`, {
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

//get Course
export const getCourse = createAsyncThunk(
  "course/getCourse",
  async (courseId, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.get(`${courseUrl}/${courseId}`, {
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

//update Course
export const updateCourse = createAsyncThunk(
  "course/updateCourse",
  async (courseData, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.put(`${courseUrl}/${courseData.id}`, courseData, {
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

//delete Course
export const deleteCourse = createAsyncThunk(
  "course/deleteCourse",
  async (courseId, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.delete(`${courseUrl}/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      console.log(data);
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
  loading: false,
  isSuccess: false,
  error: null,
  courses: [],
  courseDocument: null,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    resetCourseState: (state) => {
      state.loading = false;
      state.isSuccess = false;
      state.error = null;
      state.courseDocument = null;
      state.courses = [];
    },
    cleareSuccessState: (state) => {
      state.isSuccess = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    //Create Course builder
    builder
      .addCase(createCourse.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(createCourse.fulfilled, (state) => {
        state.loading = false;
        state.isSuccess = true;
        state.error = null;
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.loading = false;
        state.isSuccess = false;

        state.error = action.payload.data.message;
      });

    //Get all Courses builder
    builder
      .addCase(getAllCourses.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.error = null;
        state.courses = [...action.payload.data.doc];
      })
      .addCase(getAllCourses.rejected, (state, action) => {
        state.loading = false;
        state.courses = [];
        state.isSuccess = false;
        state.error = action.payload;
      });

    //Get Course builder
    builder
      .addCase(getCourse.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(getCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.error = null;
        state.courseDocument = action.payload.data.doc;
      })
      .addCase(getCourse.rejected, (state, action) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = action.payload.data.message;
      });

    //Update Course builder
    builder
      .addCase(updateCourse.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.error = null;
        state.courseDocument = action.payload.data.doc;
      })
      .addCase(updateCourse.rejected, (state, action) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = action.payload.data.message;
      });

    //Delete Course builder
    builder
      .addCase(deleteCourse.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(deleteCourse.fulfilled, (state) => {
        state.loading = false;
        state.isSuccess = true;
        state.error = null;
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = action.payload.data.message;
      });
  },
});

export const courseActions = courseSlice.actions;
export default courseSlice.reducer;
