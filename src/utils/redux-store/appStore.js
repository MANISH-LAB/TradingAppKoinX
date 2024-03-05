import {configureStore} from "@reduxjs/toolkit";
//importing reducer
import ChosenCryptoReducer from "./ChosenCryptoSlice";
const appStore= configureStore({
    reducer:{
        ChosenCrypto:ChosenCryptoReducer,
    }
});
export default appStore;