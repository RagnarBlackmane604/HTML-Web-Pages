import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'javascript',
  fontSize: 14,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
  },
});

export const { setLanguage, setFontSize } = uiSlice.actions;
export default uiSlice.reducer;
