import React from "react";

const Login = () => {
  return (
    <div className="login w-full h-[100vh] bg-[#f0f2f5] flex items-center justify-center">
      <div className="loginWrapper w-[70%] h-[70%] flex ">
        <div className="loginLeft">
          <h3 className="loginLogo"> IceSocial</h3>
          <span className="loginDesc">
            Connect with your friends and the world around you on IceSocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
