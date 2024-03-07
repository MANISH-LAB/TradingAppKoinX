import React ,{useEffect}from 'react'
import { COIN_DATA } from '../constants/APIConstants'
import {useDispatch} from 'react-redux';
import { updateId,addCryptoData } from '../redux-store/ChosenCryptoSlice';
const useGetCryptoData = (id) => {
    const dispatch=useDispatch();
    // Fetch data on component
    const fetchdata= async()=>{
        const data=await fetch(COIN_DATA+"24h%2C7d"+"&ids="+id);
        const json= await data.json();
        dispatch(updateId({id}));
        dispatch(addCryptoData(json[0]));
         console.log("this",json[0])
    }
    useEffect(()=>{fetchdata()},[])
}
export default useGetCryptoData