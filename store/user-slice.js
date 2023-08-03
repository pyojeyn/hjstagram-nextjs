import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const userSlice = createSlice({
  name: "user",
  initialState: { user: {} },

  reducers: {
    // 이 리듀서를 작성한 이유는 프로필 페이지 들어왔을 때, 데이터를 뿌려줄려고
    replaceUser(state, action) {
      state.user = action.payload.user;
    },

    // 이거는 어디다 쓰이는진 모르겠음 근데 혹시 쓰일수 있으니 일단 주석으로 보류.
    // extraReducers: {
    //   [HYDRATE]: (state, action) => {
    //     return {
    //       ...state,
    //       ...action.payload.user,
    //     };
    //   },
    // },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
