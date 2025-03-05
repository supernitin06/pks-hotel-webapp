import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authslice";
import storage from "redux-persist/lib/storage"; // Uses localStorage by default
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "auth",
  storage, // Persist in localStorage
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, 
  },
});

export const persistor = persistStore(store);
export default store;
