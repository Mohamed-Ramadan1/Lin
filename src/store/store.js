import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import adminReducers from "./adminSlice";
import userReducers from "./userSlice";
import courseReducers from "./courseSlice";
import taskReducers from "./taskSlice";
import reviewsReducers from "./reviewsSlice";
import courseEnrollmenReducers from "./courseEnrollmentsSlice";

const rootReducer = combineReducers({
  userReducers,
  adminReducers,
  courseReducers,
  courseEnrollmenReducers,
  taskReducers,
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

export const localServer = "http://localhost:3000/api/v1";

export const productionServer =
  "https://graduation-project-backend-5vtx.onrender.com/api/v1";

export const persistor = persistStore(store);
