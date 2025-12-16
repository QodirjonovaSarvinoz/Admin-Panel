// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import { BsPerson, BsLock } from "react-icons/bs";
// import "react-toastify/dist/ReactToastify.css";

// export default function LoginPage({ onLogin }) {
//   const [login, setLogin] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (login === "Sarvinoz" && password === "Qodirjonova") {
//       toast.success("Login successful!", {
//         position: "top-right",
//         autoClose: 3000,
//       });

//       setTimeout(() => {
//         onLogin();          // Login holatini ota komponentga yuboradi
//         navigate("/students"); // Login muvaffaqiyatli bo‘lsa /students sahifasiga yo‘naltiradi
//       }, 1000);
//     } else {
//       toast.error("Incorrect login or password!", {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#9DB6CF] to-[#D6E8EE]">
//       <form
//         onSubmit={handleSubmit}
//         className="relative bg-gradient-to-br from-[#D4A8D6] to-[#FDF0F5] p-10 rounded-3xl shadow-xl w-80 flex flex-col gap-6"
//       >
//         {/* Circle avatar */}
//         <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#1E1E2F] w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl">
//           <BsPerson />
//         </div>

//         <h1 className="text-2xl font-bold text-center text-[#1E1E2F] mt-12">
//           Login
//         </h1>

//         {/* Login input */}
//         <div className="relative">
//           <BsPerson className="absolute top-3 left-3 text-[#1E1E2F] text-lg" />
//           <input
//             type="text"
//             placeholder="Login"
//             value={login}
//             onChange={(e) => setLogin(e.target.value)}
//             className="pl-10 p-3 rounded-xl bg-white bg-opacity-20 placeholder:text-[#1E1E2F] text-[#1E1E2F] focus:outline-none focus:ring-2 focus:ring-[#9DB6CF] w-full"
//             required
//           />
//         </div>

//         {/* Password input */}
//         <div className="relative">
//           <BsLock className="absolute top-3 left-3 text-[#1E1E2F] text-lg" />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="pl-10 p-3 rounded-xl bg-white bg-opacity-20 placeholder:text-[#1E1E2F] text-[#1E1E2F] focus:outline-none focus:ring-2 focus:ring-[#9DB6CF] w-full"
//             required
//           />
//         </div>

//         {/* Checkbox & Forgot password */}
//         <div className="flex items-center justify-between text-sm text-[#1E1E2F]">
//           <label className="flex items-center gap-2">
//             <input type="checkbox" className="accent-[#9DB6CF]" />
//             Remember me
//           </label>
//           <span className="italic cursor-pointer hover:text-[#788AB2]">
//             Forgot Password?
//           </span>
//         </div>

//         {/* Submit button */}
//         <button
//           type="submit"
//           className="bg-[#9DB6CF] hover:bg-[#D6E8EE] text-[#1E1E2F] p-3 rounded-xl font-semibold transition"
//         >
//           Login
//         </button>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// }


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
    if (login === "Sarvinoz" && password === "Qodirjonova") {
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
        {/* Avatar */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-800 w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl">
          <BsPerson />
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-800 mt-12">
          Login
        </h1>

        {/* Email input */}
        <div className="relative">
          <BsPerson className="absolute top-3 left-3 text-gray-800 text-lg" />
          <input
            type="text"
            placeholder="Email ID"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="pl-10 p-3 rounded-md bg-blue-100 bg-opacity-30 placeholder-gray-700 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
        </div>

        {/* Password input */}
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

        {/* Checkbox & Forgot password */}
        <div className="flex items-center justify-between text-sm text-gray-700">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-500" />
            Remember me
          </label>
          <span className="italic cursor-pointer hover:text-blue-800">
            Forgot Password?
          </span>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md font-semibold transition"
        >
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
