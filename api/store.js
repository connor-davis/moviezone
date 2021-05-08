import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import { authenticationSlice } from "./slices/authentication-slice";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { userSlice } from "./slices/user-slice";

let authenticationReducer = authenticationSlice.reducer;
let userReducer = userSlice.reducer;

function loggerMiddleware(store) {
  return function (next) {
    return function (action) {
      next(action);
    };
  };
}

const rootReducer = combineReducers({
  authenticationReducer,
  userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authentication", "user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, applyMiddleware(loggerMiddleware));
let persistor = persistStore(store);

export { store, persistor };
