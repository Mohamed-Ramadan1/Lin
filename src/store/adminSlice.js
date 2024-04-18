import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "./userSlice";
import axios from "axios";

const userUrl = "http://localhost:3000/api/v1/users";
const initialState = {
  loading: false,
  error: null,
};

//Create User
export const createUser = createAsyncThunk(
  "admin/createUser",
  async (userData, { rejectWithValue, getState }) => {
    try {
      const token = getState().userReducer.token;
      const res = await axios.post(`${userUrl}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      return data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        if (action.payload.status === 401) {
          userActions.mangeUnAuthorizedUser();
        }
        state.error = action.payload.data.message;
      });
  },
});

export const adminActions = adminSlice.actions;
export default adminSlice.reducer;
