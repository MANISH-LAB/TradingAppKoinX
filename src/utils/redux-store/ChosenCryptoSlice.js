import {createSlice} from "@reduxjs/toolkit"
const ChosenCryptoSlice=createSlice({
    name:"ChosenCrypto",
    initialState:{
        id:"",
        data:null,

    },
    reducers:{
        addCryptoData: (state,action)=>{
            state.data=action.payload;
        },
        updateId:(state, action) =>{
          state.id = action.payload
    },
}
})

export default  ChosenCryptoSlice.reducer;
export const {addCryptoData , updateId}=ChosenCryptoSlice.actions;