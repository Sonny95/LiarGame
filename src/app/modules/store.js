import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../modules/cartSlice";

export default configureStore({
  reducer: { counter: counterSlice },
});
