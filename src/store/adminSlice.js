import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "./userSlice";
import axios from "axios";

const userUrl = "http://localhost:3000/api/v1/users";
const initialState = {
  loading: false,
  isSuccess: false,
  error: null,
  users: [],
  user: null,
};

//Create User
export const createUser = createAsyncThunk(
  "admin/createUser",
  async (userData, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.post(`${userUrl}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(userActions.handelUnAuthorizedUser());
      }
      return rejectWithValue(error.response);
    }
  }
);

//Create User
export const getAllUsers = createAsyncThunk(
  "admin/getAllUsers",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.get(`${userUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      console.log(data);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(userActions.handelUnAuthorizedUser());
      }
      return rejectWithValue(error.response);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
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
        state.users = [];
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
        state.users = [];
      });
  },
});

export const adminActions = adminSlice.actions;
export default adminSlice.reducer;
