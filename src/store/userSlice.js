import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Bas URL
const authUrl = "http://localhost:3000/api/v1/auth";
const userUrl = "http://localhost:3000/api/v1/users";

//SignUp new user to the application
export const signUp = createAsyncThunk(
  "user/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${authUrl}/signup`, userData);
      const data = await res.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

//SignUp new user to the application
export const login = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${authUrl}/login`, userData, {
        withCredentials: true,
      });
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response);
    }
  }
);

//Logout the current user
export const logout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.post(`${authUrl}/logout`, null, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

//Forgot password thunk
export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async ({ resetToken, password, passwordConfirm }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${authUrl}/resetPassword/${resetToken}`,
        {
          password,
          passwordConfirm,
        },
        {
          withCredentials: true,
        }
      );
      const data = await res.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

//Update password of the user.
export const updateUserPassword = createAsyncThunk(
  "user/updatePassword",
  async (userData, { rejectWithValue, getState }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.post(`${userUrl}/updatePassword`, userData, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response);
    }
  }
);

//Update user info thunk
export const updateUserInfo = createAsyncThunk(
  "user/updateUserInfo",
  async (userData, { rejectWithValue, getState }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.post(`${userUrl}/updateInfo`, userData, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response);
    }
  }
);

//Delete user account thunk
export const deleteUserAccount = createAsyncThunk(
  "user/deleteAccount",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().userReducers.token;
      await axios.delete(`${userUrl}/deleteMe`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response);
    }
  }
);

//un Active user account thunk
export const unActiveUserAccount = createAsyncThunk(
  "user/unActiveUser",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().userReducers.token;
      await axios.patch(`${userUrl}/unActivateMe`, _, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response);
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
        state.error = action.payload.data.message;
        state.isLoggedIn = false;
        state.token = null;
      });

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
        state.error = action.payload.data.message;
        state.isLoggedIn = false;
        state.token = null;
      });

    //Logout user builder
    builder
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload.data.message;
        state.isLoggedIn = false;
      });

    //ResetPassword  builder
    builder
      .addCase(resetPassword.pending, (state) => {
        state.user = null;
        state.loading = true;
        state.error = null;
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload.data.message;
        state.isLoggedIn = false;
      });

    //update user password  builder
    builder
      .addCase(updateUserPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(updateUserPassword.rejected, (state, action) => {
        if (action.payload.status === 401) {
          state.loading = false;
          state.user = null;
          state.error = action.payload;
          state.isLoggedIn = false;
          state.token = null;
        }
        state.error = action.payload.data.message;
      });

    //update user info  builder
    builder
      .addCase(updateUserInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.isLoggedIn = true;
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        if (action.payload.status === 401) {
          state.loading = false;
          state.user = null;
          state.error = action.payload;
          state.isLoggedIn = false;
          state.token = null;
        }
        state.error = action.payload.data.message;
      });

    //delete account builder
    builder
      .addCase(deleteUserAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUserAccount.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(deleteUserAccount.rejected, (state, action) => {
        if (action.payload.status === 401) {
          state.loading = false;
          state.user = null;
          state.error = action.payload;
          state.isLoggedIn = false;
          state.token = null;
        }
        state.error = action.payload.data.message;
      });

    //unActiveUserAccount account builder
    builder
      .addCase(unActiveUserAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(unActiveUserAccount.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(unActiveUserAccount.rejected, (state, action) => {
        if (action.payload.status === 401) {
          state.loading = false;
          state.user = null;
          state.error = action.payload;
          state.isLoggedIn = false;
          state.token = null;
        }
        state.error = action.payload.data.message;
      });
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
