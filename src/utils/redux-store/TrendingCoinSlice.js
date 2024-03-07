import {createSlice} from "@reduxjs/toolkit"
const TrendingCoinSlice=createSlice({
    name:"TrendingCoin",
    initialState:null,
    reducers:{
        addData: (state,action)=>{
            return state=action.payload;
        },
      
}
})

export default  TrendingCoinSlice.reducer;
export const {addData}=TrendingCoinSlice.actions;