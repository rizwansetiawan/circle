import { IFollow } from "@/interfaces/follow";
import { createSlice } from "@reduxjs/toolkit";


const initialFollowState: { followState: string; follows: IFollow[] } = {
    followState: "followings", follows: [],
  };

export const followSlice = createSlice({
    name: "follow",
    initialState: initialFollowState,
    reducers: {
        GET_FOLLOW: (state, action) => {
            state.follows = action.payload;
        },
        SETFOLLOW_STATE: (state, action) => {
            state.followState = action.payload;
        },
        SET_FOLLOWERS: (state, action: {payload: {id: number, isFollowed: boolean}}) => {
            const {id, isFollowed} = action.payload;
            state.follows = state.follows.map((follow) => {
                if(follow.id === id) {
                    return {...follow, is_followed: !isFollowed}
                }
                return follow
            })
        }
    }
})