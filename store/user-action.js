import { userActions } from "./user-slice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk(
  "getUserData",
  async (payload, thunkAPI) => {
    // 여기서 api/auth/check API 호출 해야 할듯.
    try {
      const response = await fetch("/api/auth/check");
      const userData = await response.json();

      thunkAPI.dispatch(
        userActions.replaceUser({
          user: userData,
        })
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
