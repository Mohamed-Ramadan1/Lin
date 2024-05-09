import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { cleareStatus } from "./authHandler";

const userUrl = "http://localhost:3000/api/v1/admin";

// const userUrl =
//   "https://graduation-project-backend-5vtx.onrender.com/api/v1/admin";

const initialState = {
  loading: false,
  isSuccess: false,
  error: null,
  users: [],
  userDocument: null,
};

//Create User
export const createUser = createAsyncThunk(
  "admin/createUser",
  async (userData, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.post(`${userUrl}/createUser`, userData, {
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

//get all User
export const getAllUsers = createAsyncThunk(
  "admin/getAllUsers",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.get(`${userUrl}/getAllUsers`, {
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

//get User
export const getUser = createAsyncThunk(
  "admin/getUser",
  async (userID, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.get(`${userUrl}/getUser/${userID}`, {
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

//delete User
export const deleteUser = createAsyncThunk(
  "admin/deleteUser",
  async (userID, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.delete(`${userUrl}/deleteUser/${userID}`, {
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
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    resetAdminState: (state) => {
      state.loading = false;
      state.isSuccess = false;
      state.error = null;
      state.users = [];
      state.userDocument = null;
    },
    clearSuccessState: (state) => {
      state.isSuccess = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    //Create User builder
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state) => {
        state.loading = false;
        state.isSuccess = true;
        state.error = null;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.error = action.payload.data.message;
        state.loading = false;
        state.isSuccess = false;
      });
    //Get all users builder
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.users = action.payload.data.doc;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.error = action.payload.data.message;
        state.loading = false;
        state.isSuccess = false;
      });
    //Get user builder
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.userDocument = action.payload.data.doc;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.payload.data.message;
        state.loading = false;
        state.isSuccess = false;
        state.userDocument = null;
      });

    //delete user builder
    builder
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.loading = false;
        state.isSuccess = true;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.payload.data.message;
        state.loading = false;
        state.isSuccess = false;
      });
  },
});

export const adminActions = adminSlice.actions;
export default adminSlice.reducer;
