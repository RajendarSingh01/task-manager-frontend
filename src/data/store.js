import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../features/Projects/projectSlice";

export const store = configureStore({
  reducer: projectReducer,
});
