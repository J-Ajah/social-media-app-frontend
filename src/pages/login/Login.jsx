import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { isFetching, error, user, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    loginCall(  
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };

  console.log(user);
  return (
    <div className="login w-full h-[100vh] bg-[#f0f2f5] flex items-center justify-center">
      <div className="loginWrapper w-[70%] h-[70%] flex ">
        <div className="loginLeft flex-[1] flex flex-col justify-center">
          <h3 className="loginLogo text-[50px] font-bold text-[#14A198] mb-5">
            {" "}
            IceSocial
          </h3>
          <span className="loginDesc text-[24px]">
            Connect with your friends and the world around you on IceSocial.
          </span>
        </div>
        <div className="loginRight flex-[1] flex flex-col justify-center">
          <form onSubmit={handleClick}>
            <div className="loginBox p-10 bg-[white] flex flex-col justify-between">
              <input
                placeholder="Email"
                type="email"
                ref={email}
                required
                className="loginInput py-2  rounded-md border-[1px] focus:outline-none
             border-[gray] text-[18px] pl-5 mb-4"
              />
              <input
                type="password"
                ref={password}
                required
                minLength={6}
                placeholder="Password"
                className="loginInput py-2  rounded-md border-[1px] focus:outline-none
             border-[gray] text-[18px] pl-5 mb-4"
              />
              <button className="loginButton py-2  disabled:cursor-not-allowed rounded-md border-none bg-[#14A198] text-[20px] text-[white] font-medium cursor-pointer" disabled={isFetching}>
                {" "}
                {isFetching ? "loading..." : "Login"}{" "}
              </button>
              <span className="loginForgot text-center text-[#14A198]">
                {" "}
                Forgot Password?
              </span>
              <Link to={'/register'}>
              <span className="loginRegisterButton block mx-auto w-[50%] py-2 mt-2 rounded-md border-none text-center bg-[#ebac02] text-[20px] text-[white] font-medium cursor-pointer ">
                Create a New Account
              </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
