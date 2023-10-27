import { createSlice } from "@reduxjs/toolkit";
export const dataKu = createSlice({
    name:"myData", //saya belum paham dari name ini
    initialState:{
        name:"",
        umur:""
    }, //dan initialState
    reducers:{
        COBA_DULU_KALI:() => {
            alert("data dari redux")
        }
    }
})