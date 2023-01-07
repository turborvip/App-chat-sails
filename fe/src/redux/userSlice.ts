import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../services/axios';
import { connect } from '../services/socketIO';
import local from '../utils/localStorage';
interface Account {
  username: string;
  password: string;
}

interface LoginState {
  isLogged: boolean;
  isLoading: boolean;
  error: string;
  accessToken: string | null;
  userInfo: object;
  socket: any
}

const initialState: LoginState = {
  isLogged: local.get('user') || false,
  isLoading: false,
  error: '',
  accessToken: null,
  userInfo: {},
  socket: undefined
};

export const loginInClient = createAsyncThunk(
  'login/loginInClient',
  async (data: Account, thunkAPI) => {
    try {
      const response = await axios.post('/login', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.isLogged = false;
      local.clear();
    },
    setSocket: (state, action) => {
      console.log(action.payload)
      state.socket = action.payload.socket;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginInClient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginInClient.fulfilled, (state, action: any) => {
        if(action.payload){
          state.isLogged = true;
          state.isLoading = false;
          state.error = '';
          state.accessToken = action.payload?.accessToken;
          state.userInfo = action.payload?.user;
          local.add('user', JSON.stringify(action.payload?.user));
          local.add(
            'accessToken',
            JSON.stringify(action.payload?.accessToken)
          );
          local.add(
            'refreshToken',
            JSON.stringify(action.payload?.refreshToken)
          );
        }
      })
      .addCase(loginInClient.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload.error;
      })
  },
});

export default userSlice.reducer;
export const { logout,setSocket } = userSlice.actions;
