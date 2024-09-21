import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";

// configureStore function creates a Redux store with the itemsReducer and it will be used in the Provider component
export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
