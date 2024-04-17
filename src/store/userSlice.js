import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Bas URL
const url = "http://localhost:3000/api/v1/auth";

//SignUp new user to the application
export const signUp = createAsyncThunk(
  "user/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${url}/signup`, userData);
      const data = await res.data;

      return data;
    } catch (error) {
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

//SignUp new user to the application
export const login = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${url}/login`, userData, {
        withCredentials: true,
      });
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

//Logout the current user
export const logout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.post(`${url}/logout`, null, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.data;
      // console.log(data);

      return data;
    } catch (error) {
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  user: null,
  token: null,
  loading: true,
  error: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Login
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.token = null;
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      });

    //Sign up  signUpBuilder
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.token = null;
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
        state.isLoggedIn = false;
      });

    //Logout user builder
    builder
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.user = null;
        state.token = action.payload.token;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
        state.isLoggedIn = false;
      });
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
