import axios from "axios";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    console.log("Password is: ", password.current.value);
    console.log("confirmPassword is: ", confirmPassword.current.value);
    if (password.current.value !== confirmPassword.current.value) {
      confirmPassword.current.setCustomValidity(
        "Sorry passwords are not the same"
      );
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await axios.post("http://localhost:8800/api/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

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
        <form
          onSubmit={handleClick}
          className="loginRight flex-[1] flex flex-col justify-center"
        >
          <div className="loginBox h-[450px] p-10 bg-[white] flex flex-col justify-between">
            <input
              placeholder="Username"
              className="loginInput py-2  rounded-md border-[1px] focus:outline-none
             border-[gray] text-[18px] pl-5 mb-4"
              ref={username}
              required={true}
            />
            <input
              placeholder="Email"
              className="loginInput py-2  rounded-md border-[1px] focus:outline-none
             border-[gray] text-[18px] pl-5 mb-4"
              ref={email}
              type="email"
              required={true}
            />
            <input
              placeholder="Password"
              className="loginInput py-2  rounded-md border-[1px] focus:outline-none
             border-[gray] text-[18px] pl-5 mb-4"
              ref={password}
              minLength={6}
              type="password"
              required={true}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="loginInput py-2  rounded-md border-[1px] focus:outline-none
             border-[gray] text-[18px] pl-5 mb-4"
              ref={confirmPassword}
              required={true}
            />
            <button
              type="Submit"
              className="loginButton py-2  rounded-md border-none bg-[#14A198] text-[20px] text-[white] font-medium cursor-pointer"
            >
              {" "}
              Sign Up{" "}
            </button>
            <Link to={"/login"}>
              <span className="loginRegisterButton block mx-auto w-[50%] py-2 mt-2 rounded-md border-none text-center bg-[#ebac02] text-[20px] text-[white] font-medium cursor-pointer ">
                Login
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
