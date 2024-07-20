import { React, useEffect, useState } from "react";
import LogoBisnis from "../assets/images/Chamytwinslogo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from "../features/authSlice.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboardAdmin");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <form onSubmit={Auth}>
      <div className="con1 position-relative">
        <div className="login-box position-absolute top-50 start-50 translate-middle">
          <div className="img1-con position-relative top-0 start-50 translate-middle-x overflow-hidden">
            <img
              className="logobisnis object-fit-contain"
              alt="chamytwinslogo"
              src={LogoBisnis}
            />
          </div>
          <p className="title-form text-center">Login Form</p>
          {isError && (
            <p className="text-center" style={{ color: "red" }}>
              {message}
            </p>
          )}
          <div className="custom-form display-flex flex-column d-inline-flex position-relative start-50 top-0 translate-middle-x">
            <label className="body-form">Email</label>
            <input
              type="email"
              className="custom-box"
              placeholder="Example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="custom-form display-flex flex-column d-inline-flex position-relative start-50 top-0 translate-middle-x">
            <label className="body-form">Password</label>
            <input
              type="Password"
              className="custom-box"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="custom-button position-relative start-50 top-0 translate-middle-x"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
