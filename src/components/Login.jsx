import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./store/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("nitin@gmail.com");
  const [password, setPassword] = useState("Nitin@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      console.log("ERR :", err.message);
    }
  };
  return (
    <div className="flex justify-center my-5">
      <label className="form-control w-full max-w-xs">
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
        <button
          className="btn btn-outline form-control my-4"
          onClick={handleLogin}
        >
          Login
        </button>
      </label>
    </div>
  );
};

export default Login;
