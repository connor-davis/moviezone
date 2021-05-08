import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import { authenticationSlice } from "./slices/authentication-slice";
import storage from "redux-persist/lib/storage";
import { userSlice } from "./slices/user-slice";

let userReducer = userSlice.reducer;
let authenticationReducer = authenticationSlice.reducer;

function loggerMiddleware(store) {
  return function (next) {
    return function (action) {
      console.log(action);
      next(action);
      console.log(store.getState());
    };
  };
}

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  userReducer,
  authenticationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    loggerMiddleware,
  ],
});

let persistor = persistStore(store);

export { store, persistor };
