import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Bas URL
const url = "http://localhost:3000/api/v1/auth/signup";

//SignUp new user to the application
export const signUp = createAsyncThunk(
  "user/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(url, userData);
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
    //Sign in signUpBuilder
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.user = action.payload.data.user;
        state.token = action.payload.data.token;
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
