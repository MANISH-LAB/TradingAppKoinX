import {createSlice} from "@reduxjs/toolkit"
const ChosenCryptoSlice=createSlice({
    name:"ChosenCrypto",
    initialState:null,
    reducers:{
        updateChosenCrypto: (state,action)=>{
            return state=action.payload;
        }
    }
})

export default  ChosenCryptoSlice.reducer;
export const {updateChosenCrypto}=ChosenCryptoSlice.actions;