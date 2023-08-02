import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },

  reducers: {
    // 이 리듀서를 작성한 이유는 프로필 페이지 들어왔을 때, 데이터를 뿌려줄려고
    replaceUser(state, action) {
      state.user = action.payload.user;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
