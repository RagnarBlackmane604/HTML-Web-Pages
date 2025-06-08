import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "python",
  fontSize: 14,
  selectedTestCase: 0,
  language: "javascript",
  fontSize: 14,
  selectedTestCase: 0,
};

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
    setSelectedTestCase: (state, action) => {
      state.selectedTestCase = action.payload;
    },
  },
});

export const { setLanguage, setFontSize, setSelectedTestCase } =
  workspaceSlice.actions;
export default workspaceSlice.reducer;
