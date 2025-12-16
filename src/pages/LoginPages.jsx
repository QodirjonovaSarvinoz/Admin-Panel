


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { BsPerson, BsLock } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage({ onLogin }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userLogin = login.trim();
    const userPassword = password.trim();

    console.log("Login:", userLogin);       
    console.log("Password:", userPassword); 

    if (userLogin === "Sarvinoz" && userPassword === "Qodirjonova") {
      toast.success("Login successful!", { autoClose: 3000 });

      setTimeout(() => {
        onLogin();         
        navigate("/students"); 
      }, 1000);
    } else {
      toast.error("Incorrect login or password!", { autoClose: 3000 });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-300">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white bg-opacity-80 backdrop-blur-md p-10 rounded-2xl shadow-xl w-96 flex flex-col gap-6"
      >
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-300 w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl">
          <BsPerson />
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-800 mt-12">
          Login
        </h1>

        <div className="relative">
          <BsPerson className="absolute top-3 left-3 text-gray-800 text-lg" />
          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="pl-10 p-3 rounded-md bg-blue-100 bg-opacity-30 placeholder-gray-700 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
        </div>

        <div className="relative">
          <BsLock className="absolute top-3 left-3 text-gray-800 text-lg" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 p-3 rounded-md bg-blue-100 bg-opacity-30 placeholder-gray-700 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
        </div>

        <div className="flex items-center justify-between text-sm text-gray-700">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-500" />
            Remember me
          </label>
          <span className="italic cursor-pointer hover:text-blue-800">
            Forgot Password?
          </span>
        </div>

        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-600 text-white p-3 rounded-md font-semibold transition"
        >
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
