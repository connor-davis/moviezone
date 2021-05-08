import axios from "axios";

let { createSlice } = require("@reduxjs/toolkit");

let authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    authenticationToken: "",
  },
  reducers: {
    setAuthenticationToken: (state, action) => {
      state.authenticationToken = action.payload;
    },
  },
});

let { setAuthenticationToken } = authenticationSlice.actions;

let getAuthenticationToken = (store) =>
  store.authenticationReducer.authenticationToken;

export { authenticationSlice, setAuthenticationToken, getAuthenticationToken };
