import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { addUser } from "./store/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setLoginForm] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      return navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          email,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      return navigate("/profile");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="w-1/2 m-auto text-center bg-base-200">
      <div className="my-2 text-white">
        <span className="m-auto">{isLoginForm ? "Login" : "Signup"}</span>
      </div>
      <div className="flex justify-center ">
        <label className="form-control w-full max-w-xs">
          {!isLoginForm && (
            <>
              <div className="label">
                <span className="label-text">First Name</span>
              </div>
              <input
                type="text"
                value={firstName}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <div className="label">
                <span className="label-text">Last Name</span>
              </div>
              <input
                type="text"
                value={lastName}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setLastName(e.target.value)}
              />
            </>
          )}
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="text"
            value={email}
            placeholder="abc@email.com"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="text"
            value={password}
            placeholder="*******"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-400 my-1">{error}</p>
          {isLoginForm ? (
            <button
              className="btn btn-outline form-control my-4"
              onClick={handleLogin}
            >
              Login
            </button>
          ) : (
            <button
              className="btn btn-outline form-control my-4"
              onClick={handleSignup}
            >
              Register
            </button>
          )}
          {!isLoginForm ? (
            <p
              className="form-control my-4 m-auto cursor-pointer"
              onClick={() => setLoginForm(!isLoginForm)}
            >
              If New User ?... please Signup here
            </p>
          ) : (
            <p
              className="form-control my-4 m-auto cursor-pointer"
              onClick={() => setLoginForm(!isLoginForm)}
            >
              Please Login
            </p>
          )}
        </label>
      </div>
    </div>
  );
};

export default Login;
