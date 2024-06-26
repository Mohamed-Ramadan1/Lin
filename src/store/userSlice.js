import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { cleareStatus } from "./authHandler";

//Bas URL
// const authUrl = `http://localhost:3000/api/v1/auth`;
// const userUrl = `http://localhost:3000/api/v1/users`;

const authUrl = `https://e-learning-backend-application.onrender.com/api/v1/auth`;
const userUrl = `https://e-learning-backend-application.onrender.com/api/v1/users`;

//SignUp new user to the application
export const signUp = createAsyncThunk(
  "user/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${authUrl}/signup`, userData);
      const data = await res.data;

      toast.success("User Created Successfully");
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
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
      toast.success("User LoggedIn Successfully");
      return data;
    } catch (error) {
      toast.error("Invalid Email or Password");
      toast.error(error.response.data.message);
      return rejectWithValue(error.response);
    }
  }
);

//Logout the current user
export const logout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.post(`${authUrl}/logout`, null, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      dispatch(cleareStatus());
      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

//Update password of the user.
export const updateUserPassword = createAsyncThunk(
  "user/updatePassword",
  async (userData, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.post(`${userUrl}/updatePassword`, userData, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      toast.success("Password Updated Successfully");
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("UnAuthorized User");
        dispatch(cleareStatus());
      }
      toast.error("Error Updating Password");
      return rejectWithValue(error.response);
    }
  }
);

//Update user info thunk
export const updateUserInfo = createAsyncThunk(
  "user/updateUserInfo",
  async (userData, { rejectWithValue, getState, dispatch }) => {
    try {
      if (userData.firstName || userData.lastName) {
        const name = `${userData.firstName || ""} ${userData.lastName || ""}`;
        userData.name = name;
      }
      const token = getState().userReducers.token;
      const res = await axios.patch(`${userUrl}/updateInfo`, userData, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      console.log(data);

      // console.log(res);
      toast.success("User Info Updated Successfully");
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("UnAuthorized User");
        dispatch(cleareStatus());
      }
      toast.error("Error Updating User Info");
      return rejectWithValue(error.response);
    }
  }
);

//Delete user account thunk
export const deleteUserAccount = createAsyncThunk(
  "user/deleteAccount",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      await axios.delete(`${userUrl}/deleteMe`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return dispatch(cleareStatus());
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(cleareStatus());
      }
      return rejectWithValue(error.response);
    }
  }
);

//un Active user account thunk
export const unActiveUserAccount = createAsyncThunk(
  "user/unActiveUser",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      await axios.patch(`${userUrl}/unActivateMe`, _, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return dispatch(cleareStatus());
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(cleareStatus());
      }
      return rejectWithValue(error.response);
    }
  }
);

//get me user thunk
export const getMe = createAsyncThunk(
  "user/getMe",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().userReducers.token || null;
      const res = await axios.get(`${userUrl}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;

      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(cleareStatus());
      }
      console.log(error);
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  user: null,
  token: null,
  loading: true,
  isSuccess: false,
  error: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handelUnAuthorizedUser: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.loading = false;
      state.isSuccess = false;
      state.error = "UnAuthorized User";
    },
    resetSuccessStates: (state) => {
      state.isSuccess = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    //Sign up  signUpBuilder
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.token = null;
        state.error = null;
        state.isLoggedIn = false;
        state.isSuccess = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isSuccess = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload.data.message;
        state.isLoggedIn = false;
        state.token = null;
        state.isSuccess = false;
      });

    //Login
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.token = null;
        state.error = null;
        state.isLoggedIn = false;
        state.isSuccess = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload.data.message;
        state.isLoggedIn = false;
        state.token = null;
        state.isSuccess = false;
      });

    //Logout user builder
    builder
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isSuccess = true;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload.data.message;
        state.loading = false;
        state.isSuccess = false;
      });

    //update user password  builder
    builder
      .addCase(updateUserPassword.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(updateUserPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isSuccess = true;
      })
      .addCase(updateUserPassword.rejected, (state, action) => {
        state.error = action.payload.data.message;
        state.isSuccess = false;
      });

    //update user info  builder
    builder
      .addCase(updateUserInfo.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.isLoggedIn = true;
        state.isSuccess = true;
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.error = action.payload.data.message;
        state.isSuccess = false;
      });
    //Get me user builder
    builder
      .addCase(getMe.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.isLoggedIn = true;
        // state.isSuccess = true;
      })
      .addCase(getMe.rejected, (state, action) => {
        // state.error = action.payload.data.message;
        state.isLoggedIn = false;
        state.user = null;
        state.token = null;
        state.isSuccess = false;
      });

    //delete account builder
    builder
      .addCase(deleteUserAccount.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(deleteUserAccount.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isLoggedIn = false;
        state.token = null;
        state.isSuccess = true;
      })
      .addCase(deleteUserAccount.rejected, (state, action) => {
        state.error = action.payload.data.message;
        state.isSuccess = false;
      });

    //unActiveUserAccount account builder
    builder
      .addCase(unActiveUserAccount.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(unActiveUserAccount.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isLoggedIn = false;
        state.token = null;
        state.isSuccess = true;
      })
      .addCase(unActiveUserAccount.rejected, (state, action) => {
        state.error = action.payload.data.message;
        state.isSuccess = false;
      });
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
