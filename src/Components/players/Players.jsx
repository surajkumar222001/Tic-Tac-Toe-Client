import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./players.css";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addGame, inviteUser } from "../../redux/user/user.actions";
import { setAlert } from "../../redux/alert/alert.action";
import * as userReducer from '../../redux/user/user.reducer'
import { useEffect } from "react";

let Players = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  

  let {invitedUser} = useSelector((state) => {
    return state[userReducer.userReducerFeatureKey]
  })
 

  let {name , email} = invitedUser;
  

  
  let [userEmail, setUserEmail] = useState({
    email: "",
  });

  let [userEmailError, setUserEmailError] = useState({
    emailError: "",
  });

  let validateUserEmail = (event) => {
    setUserEmail({
      ...userEmail,
      email: event.target.value,
    });
    let regExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    !regExp.test(event.target.value)
      ? setUserEmailError({
          ...userEmailError,
          emailError: "Enter a valid Email",
        })
      : setUserEmailError({ ...userEmailError, emailError: "" });
  };

  // send user data to server


 let handleInvite = (event) => {
      event.preventDefault();
      let { email } = userEmail;
      if (email === "" ) {
        dispatch(setAlert("Please fill in the field", "danger"));
      } else {
        dispatch(inviteUser(userEmail,navigate));
        dispatch(addGame({email}));
      }
    };

    useEffect(() => {
      dispatch(addGame({email}));
    },[])
   

  return (
    <React.Fragment>
      <section className="p-3">
        <div className="container players bg-light">
          <div className="card-body">
          <div><Link to="/home"><i class="fa fa-regular fa-chevron-left "/></Link></div>
            <div className="mt-5">
            <span>
              <b>Start a new game</b>
            </span>
            <h2 className="">Whom do you want to play with?</h2>
            </div>
          </div>
          <div className="card-body">
          <div className="">
            <label htmlFor="">Email</label>
            <input
              name="email"
              value={userEmail.email}
              onChange={validateUserEmail}
              type="email"
              className={`form-control ${
                userEmailError.emailError.length > 0 ? "is-invalid " : ""
              } p-4`}
              placeholder="Type their email here"
            />
            {userEmailError.emailError.length > 0 ? (
              <small className="text-danger">{userEmailError.emailError}</small>
            ) : (
              ""
            )}
          </div>
          <div className="mt-5">
            <button onClick={handleInvite}
              className="btn btn-lg btn-warning w-100">
              Start game
            </button>
          </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Players;
