import React, { useState } from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";

import * as alertAction from "../../redux/alert/alert.action";
import { useDispatch, useSelector } from "react-redux";
import * as userAction from "../../redux/user/user.actions";
import * as userReducer from "../../redux/user/user.reducer"

let Home = () => {
  let {games} = useSelector((state) => state[userReducer.userReducerFeatureKey])
  let dispatch = useDispatch()
  
   let invitedPlayer = () => {
    return <>
      <div className="card mt-3 bg-light">
        <div className="card-body">
          <h2>Game with {games.games?.playerName}</h2>
          <>{games.games?.created}</>
          <Link to="/game" className="btn btn-lg bg-warning w-100 m-1" >Play</Link>
        </div>
      </div>
    </>
   }

  return (
    <React.Fragment>
      <section className="p-3">
        <div className="container layout bg-light">
            <div className="card-body">
             <span className="h3">Your Games</span>
            <div>
              {
                games ?  invitedPlayer() :
                <>
                 <h1 className="d-flex justify-content-center align-items-center f2">No Games Found</h1>
                 <Link to='/players' className="btn btn-lg btn-warning w-100 mt-5" >Start a new game</Link></>
              }
            </div>
            </div>
           <div className="card-body mt-5">
            <div className="newgame">
              <Link to="/players" className="text-white">  New game </Link>
            </div>   
           <div >

            
            </div>
           </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Home;
