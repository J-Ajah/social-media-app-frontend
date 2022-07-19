import React from "react";

const Register = () => {
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
          <div className="loginBox h-[450px] p-10 bg-[white] flex flex-col justify-between">
            <input
              placeholder="Username"
              className="loginInput py-2  rounded-md border-[1px] focus:outline-none
             border-[gray] text-[18px] pl-5 mb-4"
            />
            <input
              placeholder="Email"
              className="loginInput py-2  rounded-md border-[1px] focus:outline-none
             border-[gray] text-[18px] pl-5 mb-4"
            />
            <input
              placeholder="Password"
              className="loginInput py-2  rounded-md border-[1px] focus:outline-none
             border-[gray] text-[18px] pl-5 mb-4"
            />
            <input
              placeholder="Confirm Password"
              className="loginInput py-2  rounded-md border-[1px] focus:outline-none
             border-[gray] text-[18px] pl-5 mb-4"
            />
            <button className="loginButton py-2  rounded-md border-none bg-[#14A198] text-[20px] text-[white] font-medium cursor-pointer">
              {" "}
              Sign Up{" "}
            </button>
            <span className="loginRegisterButton block mx-auto w-[50%] py-2 mt-2 rounded-md border-none text-center bg-[#ebac02] text-[20px] text-[white] font-medium cursor-pointer ">
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
