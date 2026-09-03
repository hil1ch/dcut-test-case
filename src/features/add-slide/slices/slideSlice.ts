import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Slide } from "../../../entities/Slide";

const initialState: Slide[] = [
  {
    id: 1,
    title: "Построение системы",
    annotation: "Начальный этап и описание архитектуры продукта.",
    isChecked: true,
  },
  {
    id: 2,
    title: "Аналитика и данные",
    annotation: "Сбор и структурирование метрик для принятия решений.",
    isChecked: false,
  },
  {
    id: 3,
    title: "Команда и процессы",
    annotation: "Понимание ролей, задач и коммуникаций внутри команды.",
    isChecked: true,
  },
  {
    id: 4,
    title: "Запуск и рост",
    annotation: "Переход к рабочему продукту и дальнейшему масштабированию.",
    isChecked: false,
  },
];

export const slideSlice = createSlice({
  name: "slides",
  initialState,
  reducers: {
    addSlide: (state, action: PayloadAction<Omit<Slide, "id">>) => {
      const nextId =
        state.length === 0 ? 1 : Math.max(...state.map(({ id }) => id)) + 1;
      state.unshift({ id: nextId, ...action.payload });
    },
    deleteSlide: (state, action: PayloadAction<number>) => {
      return state.filter((slide) => slide.id !== action.payload);
    },
  },
});

export const { addSlide, deleteSlide } = slideSlice.actions;
export default slideSlice.reducer;
