import { combineReducers } from "@reduxjs/toolkit";
import { authSlice, threadSlice } from "./slices";
import { followSlice } from "./slices/followSlice";

export const { AUTH_CHECK, AUTH_LOGIN, AUTH_ERROR, AUTH_LOGOUT, ALERT_NOTIF } = authSlice.actions; // caseReducers // name // getinitialstate
export const { GET_THREADS, SET_THREAD_LIKE } = threadSlice.actions;
export const { GET_FOLLOW, SETFOLLOW_STATE, SET_FOLLOWERS } = followSlice.actions

export const authReducer = authSlice.reducer;
export const threadReducer = threadSlice.reducer;
export const followReducer = followSlice.reducer;

const rootReducer = combineReducers({ // pemanggilan utama dari store redux
  auth: authReducer,
  thread: threadReducer,
  follow: followReducer,
});

export default rootReducer;
