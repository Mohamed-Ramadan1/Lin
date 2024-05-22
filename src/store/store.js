import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import adminReducers from "./adminSlice";
import userReducers from "./userSlice";
import courseReducers from "./courseSlice";
import reviewsReducers from "./reviewsSlice";
import courseEnrollmenReducers from "./courseEnrollmentsSlice";

const rootReducer = combineReducers({
  userReducers,
  adminReducers,
  courseReducers,
  courseEnrollmenReducers,
  reviewsReducers,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
