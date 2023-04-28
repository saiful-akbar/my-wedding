import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./reducers/settingsReducer";

export default configureStore({
  reducer: {
    settings: settingsReducer,
  },
});
