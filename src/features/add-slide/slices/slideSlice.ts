import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Slide } from "../../../entities/Slide";

const initialState: Slide[] = [];

export const slideSlice = createSlice({
  name: "slides",
  initialState,
  reducers: {
    // resetSlides: () => initialState,
    addSlide: (state, action: PayloadAction<Slide>) => {
      state.push(action.payload);
    },
    deleteSlide: (state, action: PayloadAction<number>) => {
      return state.filter((slide) => slide.id !== action.payload);
    },
  },
});

export const { /* resetSlides */ addSlide, deleteSlide } = slideSlice.actions;
export default slideSlice.reducer;
