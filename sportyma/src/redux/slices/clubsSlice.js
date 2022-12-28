import {createSlice} from '@reduxjs/toolkit';
import clubsData from '../../datas/clubs.json';

const initialState = {
  clubs: clubsData,
};

const clubsSlice = createSlice({
  name: 'clubs',
  initialState: initialState,
  reducers: {
    addClub: (state, action) => {
      state.clubs.push(action.payload.club);
      return state;
    },
    resetState: () => {
      return initialState;
    },
  },
  extraReducers: {},
});

export const {resetState, addClub} = clubsSlice.actions;

export default clubsSlice.reducer;
