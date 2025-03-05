import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habits: [],
};

const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    setHabits: (state, action) => {
      state.habits = action.payload;
    },
  },
});

export const { setHabits } = habitsSlice.actions;
export default habitsSlice.reducer;
