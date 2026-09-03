export type { Slide } from "./model/types";
export { SlideCard } from "./ui/SlideCard";
export {
  addSlide,
  deleteSlide,
} from "../../features/add-slide/model/sliceSlide";
export { default as slideReducer } from "../../features/add-slide/model/sliceSlide";
