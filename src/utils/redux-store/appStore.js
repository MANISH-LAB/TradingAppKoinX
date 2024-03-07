import {configureStore} from "@reduxjs/toolkit";
//importing reducer
import ChosenCryptoReducer from "./ChosenCryptoSlice.js";
import TrendingCoinReducer from "./TrendingCoinSlice.js"
const appStore= configureStore({
    reducer:{
        ChosenCrypto:ChosenCryptoReducer,
        TrendingCoin:TrendingCoinReducer,
    },
});
export default appStore;