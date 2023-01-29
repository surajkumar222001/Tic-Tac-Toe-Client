import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as alertAction from "../../redux/alert/alert.action";
import * as userAction from "../../redux/user/user.actions";
import { getToken, isLoggedIn } from "../../util/userUtil";

let Login = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  
 
  let stateHandle = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  // send user data to server

  let loginUser = (event) => {
    event.preventDefault();
    setTimeout(() => {
      return alert(isLoggedIn());
    }, 5000);
    let { username, password } = userInfo;
    if (username === "" || password === "") {
      dispatch(alertAction.setAlert("Please fill in the field", "danger"));
    } else {
      dispatch(userAction.userLogin(userInfo, navigate));
    }
  };

  return (
    <React.Fragment>
      <section className="p-3">
        <div className="container login bg-light">
            <div className="card-body">
            <div><Link to="/register"><i class="fa fa-regular fa-chevron-left "/></Link></div>
               <div className="mt-3">
               <span> Login</span>
               <h1>Please enter your details</h1>
               </div>
            </div>
          <div className="card-body ">
            <form action="" onSubmit={loginUser}>
              <div className="form-group">
              <label htmlFor=""><b>Username</b></label>
                <input
                  name="username"
                  value={userInfo.username}
                  onChange={stateHandle}
                  type="username"
                  className={`form-control  p-4`}
                  placeholder="Type your username here"
                />
               
              </div>

              <div className="form-group">
              <label htmlFor=""><b>Password</b></label>
                <input
                  name="password"
                  value={userInfo.password}
                  onChange={stateHandle}
                  type="password"
                  className={`form-control  p-4`}
                  placeholder="Type your password here"
                />
              </div>

              <div className="mt-5">
                <input
                  type="submit"
                  className="btn btn-warning btn-lg w-100 text-white"
                  value="Login"
                />
              </div>
              
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Login;
