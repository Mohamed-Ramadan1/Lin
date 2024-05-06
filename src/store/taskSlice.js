import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cleareStatus } from "./authHandler";
import axios from "axios";

// const tasksUrl = `http://localhost:3000/api/v1/tasks`;

const tasksUrl = `https://graduation-project-backend-5vtx.onrender.com/api/v1/tasks`;

//Create Task
export const createTask = createAsyncThunk(
  "task/createTask",
  async (taskData, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.post(`${tasksUrl}`, taskData, {
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

//get all Task
export const getAllTasks = createAsyncThunk(
  "task/getAllTasks",
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

//get Task
export const getTask = createAsyncThunk(
  "task/getTask",
  async (taskId, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.get(`${tasksUrl}/${taskId}`, {
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

//update Task
export const updateTask = createAsyncThunk(
  "task/updateTask",
  async (taskData, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.patch(`${tasksUrl}/${taskData.id}`, taskData, {
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

//delete Task
export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (taskId, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState().userReducers.token;
      const res = await axios.delete(`${tasksUrl}/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        dispatch(cleareStatus());
      }
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  tasks: [],
  task: {},
  loading: false,
  error: null,
  isSuccess: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    resetTasksState: (state) => {
      state.loading = false;
      state.isSuccess = false;
      state.error = null;
      state.tasks = [];
      state.task = {};
    },

    resetSuccessState: (state) => {
      state.isSuccess = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Add task builders
    builder
      .addCase(createTask.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(createTask.fulfilled, (state) => {
        state.loading = false;
        state.isSuccess = true;
      })
      .addCase(createTask.rejected, (state, { payload }) => {
        state.error = payload.data.message;
        state.loading = false;
        state.isSuccess = false;
      });

    builder
      .addCase(getAllTasks.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(getAllTasks.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isSuccess = true;
        state.tasks = payload.data.tasks;
      })
      .addCase(getAllTasks.rejected, (state, { payload }) => {
        state.error = payload.data.message;
        state.loading = false;
        state.isSuccess = false;
      });

    //get Task
    builder
      .addCase(getTask.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(getTask.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isSuccess = true;
        state.task = payload.data.task;
      })
      .addCase(getTask.rejected, (state, { payload }) => {
        state.error = payload.data.message;
        state.loading = false;
        state.isSuccess = false;
      });

    //update Task
    builder
      .addCase(updateTask.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(updateTask.fulfilled, (state) => {
        state.loading = false;
        state.isSuccess = true;
      })
      .addCase(updateTask.rejected, (state, { payload }) => {
        state.error = payload.data.message;
        state.loading = false;
        state.isSuccess = false;
      });

    //delete Task
    builder
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(deleteTask.fulfilled, (state) => {
        state.loading = false;
        state.isSuccess = true;
      })
      .addCase(deleteTask.rejected, (state, { payload }) => {
        state.error = payload.data.message;
        state.loading = false;
        state.isSuccess = false;
      });
  },
});

export const taskActions = taskSlice.actions;
export default taskSlice.reducer;
