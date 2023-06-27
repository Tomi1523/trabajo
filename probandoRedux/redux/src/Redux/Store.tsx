import { configureStore } from "@reduxjs/toolkit";

// Importa el reducer adecuado para el estado "user"
import userReducer from "./UserSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
