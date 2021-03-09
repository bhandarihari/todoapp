import React,{useState,useEffect} from 'react';
import './App.css';
import RouteFile from './RouteFile';
import UserContex from '../Contex/UserContex';
import FechData from '../Utils/FechData';
import Toastify from '../Utils/Toastify';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = ()=> {
  const [token ,setToken] = useState('');
  useEffect(()=>{
    let tkn = localStorage.getItem('token');
    if(tkn===null){
      localStorage.setItem('token','');
      tkn=''
    }
    if(!tkn){
      
    }
    FechData.POST('/registration/check_token',{token:tkn},true)
    .then((res)=>{
      Toastify.showSuccess("You are logged in")
    })
    .catch((err)=>{
      Toastify.errorMsg(err)
    })
  },[])

  return (
    <>
      <UserContex.Provider value={{token,setToken}}>
      <RouteFile/>
      </UserContex.Provider>
      <ToastContainer />
    </>
  );
}

export default App;
