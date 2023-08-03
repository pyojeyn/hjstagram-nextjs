import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userSlice from "./user-slice";

const makeStore = () => {
  const store = configureStore({
    reducer: { user: userSlice.reducer },
  });

  return store;
};

// const store = configureStore({
//   reducer: { user: userSlice.reducer },
// });

// createWrapper 함수를 사용하여 Next.js 애플리케이션과 Redux 스토어 통합
// -> 서버 사이드 렌더링을 지원하는 Redux 스토어 생성
export const wrapper = createWrapper(makeStore);

export default makeStore;
