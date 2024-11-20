import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../modules/counterSlice";

export default configureStore({
  reducer: { counter: counterSlice },
});
