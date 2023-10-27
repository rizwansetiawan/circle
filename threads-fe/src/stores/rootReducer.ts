import { combineReducers } from "@reduxjs/toolkit";
import { authSlice, dataKu, threadSlice } from "./slices";
import { followSlice } from "./slices/followSlice";

export const { AUTH_CHECK, AUTH_LOGIN, AUTH_ERROR, AUTH_LOGOUT, ALERT_NOTIF } = authSlice.actions; // caseReducers // name // getinitialstate
export const { GET_THREADS, SET_THREAD_LIKE } = threadSlice.actions;
export const { GET_FOLLOW, SETFOLLOW_STATE, SET_FOLLOWERS } = followSlice.actions
export const { COBA_DULU_KALI } = dataKu.actions;

export const authReducer = authSlice.reducer;
export const threadReducer = threadSlice.reducer;
export const followReducer = followSlice.reducer;
export const DataKu = dataKu.reducer;

const rootReducer = combineReducers({ // pemanggilan utama dari store redux
  auth: authReducer,
  thread: threadReducer,
  follow: followReducer,
  dataKuCombine:DataKu,
});

export default rootReducer;
