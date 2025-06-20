import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  email?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  error: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  error: null,
  loading: false,
};

// REGISTER
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (
    {
      firstName,
      lastName,
      email,
      password,
    }: { firstName: string; lastName: string; email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      if (firstName.length < 2 || lastName.length < 2 || password.length < 6) {
        return rejectWithValue('Validation error: Please check your inputs');
      }

      return {
        user: {
          id: 'mock-id-123',
          name: `${firstName} ${lastName}`,
          email,
        },
        token: 'fake-jwt-token',
      };
    } catch {
      return rejectWithValue('Registration failed');
    }
  }
);

// LOGIN
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      if (email === 'admin@admin.com' && password === 'admin123') {
        return {
          user: {
            id: 'mock-id-123',
            name: 'Admin User',
            email,
          },
          token: 'fake-jwt-token',
        };
      } else {
        return rejectWithValue('Invalid email or password');
      }
    } catch {
      return rejectWithValue('Login failed');
    }
  }
);

// SLICE
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = null;
      state.loading = false;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, clearError } = authSlice.actions;

export default authSlice.reducer;
