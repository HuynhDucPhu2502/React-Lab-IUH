import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ================================================================
// SLICE
// ================================================================
const initialValue = {
  tasks: [],
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) =>
    builder
      // fetchTasks
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })

      // deleteTask
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })

      // addTask
      .addCase(addTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })

      // updateTask
      .addCase(updateTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTask.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      }),
});

// ================================================================
// ASYNC THUNK
// ================================================================
export const fetchTasks = createAsyncThunk(
  "taskSlice/fetchTasks",
  async (_, { rejectWithValue }) => {
    return await fetch("http://localhost:3001/tasks")
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  }
);

export const deleteTask = createAsyncThunk(
  "taskSlice/deleteTask",
  async (id, { rejectWithValue }) => {
    return await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => rejectWithValue(err));
  }
);

export const addTask = createAsyncThunk(
  "taskSlice/addTask",
  async (task, { rejectWithValue }) => {
    return await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  }
);

export const updateTask = createAsyncThunk(
  "taskSlice/updateTask",
  async ({ id, task }, { rejectWithValue }) => {
    return await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  }
);

// ================================================================
// EXPORT
// ================================================================
export default taskSlice.reducer;
