import React, {useEffect} from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Register from "./Components/user/Register";
import Login from "./Components/user/Login";
import * as userAction from '../src/redux/user/user.actions'
import * as userUtil from '../src/util/userUtil'
import {useDispatch} from "react-redux";
import TicTacToe from "./Components/tik-tac-toe/TicTacToe";
import Entry from "./Components/entry/Entry";
import Home from "./Components/userHome/Home";
import Players from "./Components/players/Players";


 let App = () => {

    let dispatch = useDispatch();
     useEffect(() => {
         if (userUtil.getToken()){
             dispatch(userAction.getUserInfo())
             dispatch(userAction.games());
         }
     },[])
     return (
         <React.Fragment>
             <Router>
                 
                
                 <Routes>
                     <Route exact path="/" element={<Entry/>}/>
                     <Route exact path="/game" element={<TicTacToe/>}/>
                     <Route exact path="/home" element={<Home/>}/>
                     <Route exact path="/players" element={<Players/>}/>
                     <Route exact path="register" element={<Register/>}/>
                     <Route exact path="login" element={<Login/>}/>
                 </Routes>
             </Router>
         </ React.Fragment>
     );



 }
export default App;
