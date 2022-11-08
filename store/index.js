import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/couterSlicer";
import usersReducer from "../features/users/usersSlicer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});
