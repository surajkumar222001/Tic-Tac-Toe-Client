import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";

import * as alertAction from "../../redux/alert/alert.action";
import { useDispatch } from "react-redux";
import * as userAction from "../../redux/user/user.actions";

let Register = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let [userInfo, setUserInfo] = useState({
    name: "",
    username : "",
    email: "",
    password: "",
  });

  let [userInfoError, setUserInfoError] = useState({
    nameError: "",
    userNameError: " ",
    emailError: "",
    passwordError: "",
  });

  let validateName = (event) => {
    setUserInfo({
      ...userInfo,
      name: event.target.value,
    });
    let regExp = /^[a-zA-Z0-9]{4,10}$/;
    !regExp.test(event.target.value)
      ? setUserInfoError({
          ...userInfoError,
          nameError: "Enter a Proper Name",
        })
      : setUserInfoError({ ...userInfoError, nameError: "" });
  };

  let validateUserName = (event) => {
    setUserInfo({
      ...userInfo,
      username: event.target.value,
    });
    let regExp = /^[a-zA-Z0-9]{4,10}$/;
    !regExp.test(event.target.value)
      ? setUserInfoError({
          ...userInfoError,
          userNameError: "Enter a Proper UserName",
        })
      : setUserInfoError({ ...userInfoError, userNameError: "" });
  };

  let validateUserEmail = (event) => {
    setUserInfo({
      ...userInfo,
      email: event.target.value,
    });
    let regExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    !regExp.test(event.target.value)
      ? setUserInfoError({
          ...userInfoError,
          emailError: "Enter a valid Email",
        })
      : setUserInfoError({ ...userInfoError, emailError: "" });
  };

  let validateUserPassword = (event) => {
    setUserInfo({
      ...userInfo,
      password: event.target.value,
    });
    let regExp = /^[A-za-z]\w{7,14}$/;
    !regExp.test(event.target.value)
      ? setUserInfoError({
          ...userInfoError,
          passwordError: "Enter a valid Password",
        })
      : setUserInfoError({ ...userInfoError, passwordError: "" });
  };

  // send user data to server

  let submitUser = (event) => {
    event.preventDefault();
    let { email, password, name,username } = userInfo;
    if (email === "" || password === "" || name === "" || username ==="") {
      dispatch(alertAction.setAlert("Please fill in the field", "danger"));
    } else {
      dispatch(userAction.registerUser(userInfo, navigate));
    }
  };

  return (
    <React.Fragment>
      <section className="p-3">
        
        <div className="container register bg-light">
          
            <div className="card-body">
            <div><Link to="/"><i class="fa fa-regular fa-chevron-left "/></Link></div>
             <div className="mt-3">
             <span>Create account</span>
             <h1>Let’s get to know you better!</h1>
             </div>
            </div>
          <div className="card-body ">
            <form action="" onSubmit={submitUser}>
              <div className="form-group">
                <label htmlFor="">Your name</label>
                <input
                  name="name"
                  value={userInfo.name}
                  onChange={validateName}
                  type="Name"
                  className={`form-control ${
                    userInfoError.nameError.length > 0 ? "is-invalid " : ""
                  } p-4`}
                  placeholder="Type your name here"
                />
                {userInfoError.nameError.length > 0 ? (
                  <small className="text-danger">
                    {userInfoError.nameError}
                  </small>
                ) : (
                  ""
                )}
              </div>

              <div className="form-group">
              <label htmlFor="">User name</label>
                <input
                  name="username"
                  value={userInfo.username}
                  onChange={validateUserName}
                  type="username"
                  className={`form-control ${
                    userInfoError.nameError.length > 0 ? "is-invalid " : ""
                  } p-4`}
                  placeholder="Type your username here"
                />
                {userInfoError.nameError.length > 0 ? (
                  <small className="text-danger">
                    {userInfoError.userNameError}
                  </small>
                ) : (
                  ""
                )}
              </div>

              <div className="form-group">
              <label htmlFor="">Email</label>
                <input
                  name="email"
                  value={userInfo.email}
                  onChange={validateUserEmail}
                  type="email"
                  className={`form-control ${
                    userInfoError.emailError.length > 0 ? "is-invalid " : ""
                  } p-4`}
                  placeholder="Type your email here"
                />
                {userInfoError.emailError.length > 0 ? (
                  <small className="text-danger">
                    {userInfoError.emailError}
                  </small>
                ) : (
                  ""
                )}
              </div>

              <div className="form-group">
              <label htmlFor="">Password</label>
                <input
                  name="password"
                  value={userInfo.password}
                  onChange={validateUserPassword}
                  type="password"
                  className={`form-control ${
                    userInfoError.passwordError.length > 0 ? "is-invalid " : ""
                  } p-4`}
                  placeholder="Type your password here"
                />
                {userInfoError.passwordError.length > 0 ? (
                  <small className="text-danger">
                    {userInfoError.passwordError}
                  </small>
                ) : (
                  ""
                )}
              </div>

              <div className="mt-4">
                <input
                
                  type="submit"
                  className="btn btn-warning btn-lg w-100 text-white"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Register;
