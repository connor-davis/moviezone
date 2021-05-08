import axios from "axios";

let { createSlice } = require("@reduxjs/toolkit");

let authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    authenticationToken: "",
  },
  reducers: {
    registerUser: async (state, action) => {
      let response = await axios.post(
        "/api/authentication/register",
        action.payload
      );

      console.log(response);
    },
    loginUser: async (state, action) => {
      let response = await axios.post(
        "/api/authentication/login",
        action.payload
      );

      console.log(response);
    },
  },
});

let { registerUser, loginUser } = authenticationSlice.actions;

let getAuthenticationToken = (store) =>
  store.authenticationReducer.authenticationToken;

export { authenticationSlice, registerUser, loginUser, getAuthenticationToken };
