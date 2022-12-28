import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isSignedIn: false,
  isLoading: true,
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        isSignedIn: true,
        email: action.payload.email,
        isLoading: true,
      };
    },
    updateIsLoading: (state, action) => {
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    },
    userSignOut: () => {
      return initialState;
    },
  },
});

export const {setUser, updateIsLoading, userSignOut} = userSlice.actions;

export default userSlice.reducer;
