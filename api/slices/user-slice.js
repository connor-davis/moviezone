const { createSlice } = require("@reduxjs/toolkit");

let userSlice = createSlice({
  name: "user",
  initialState: {
    info: {},
  },
  reducers: {
    setInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

let { setInfo } = userSlice.actions;

let getInfo = (store) => store.userReducer.info;

export { userSlice, setInfo, getInfo };
