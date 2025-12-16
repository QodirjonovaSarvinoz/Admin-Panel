
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  BsPeopleFill,
  BsPersonBadgeFill,
  BsArrowBarLeft,
  BsArrowBarRight,
} from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import SingleStudent from "./pages/SingleStudent";
import SingleTeacher from "./pages/SingleTeacher";

function LoginPage({ onLogin }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login === "Sarvinoz" && password === "Qodirjonova") {
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
      });
      setTimeout(() => {
        onLogin();
        navigate("/students"); 
      }, 1000);
    } else {
      toast.error("Incorrect login or password!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#12121C]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1E1E2F] p-8 rounded-xl w-80 flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-white text-center mb-4">Login</h1>
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className="p-2 rounded bg-[#2A2A40] text-white placeholder:text-gray-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded bg-[#2A2A40] text-white placeholder:text-gray-400"
          required
        />
        <button
          type="submit"
          className="bg-[#9DB6CF] text-[#1E1E2F] p-2 rounded hover:bg-[#D6E8EE] transition"
        >
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!loggedIn) {
    return <BrowserRouter><Routes><Route path="*" element={<LoginPage onLogin={() => setLoggedIn(true)} />} /></Routes></BrowserRouter>;
  }

  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-[#12121C]">
        <div
          className={`fixed h-screen bg-[#1E1E2F] text-white p-5 transition-all duration-700
          ${open ? "w-60" : "w-20"}`}
        >
          <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-3xl">📊</span>
            {open && <span>Dashboard</span>}
          </h1>

          <nav className="flex flex-col gap-3">
            <Link
              to="/students"
              className="flex items-center gap-3 bg-gradient-to-br from-[#9DB6CF] to-[#D6E8EE] px-4 py-2 rounded-lg text-[#1E1E2F] hover:scale-105 transition duration-300"
            >
              <BsPeopleFill size={20} />
              {open && <span>Students</span>}
            </Link>

            <Link
              to="/teachers"
              className="flex items-center gap-3 bg-gradient-to-br from-[#D4A8D6] to-[#FDF0F5] px-4 py-2 rounded-lg text-[#1E1E2F] hover:scale-105 transition duration-300"
            >
              <BsPersonBadgeFill size={20} />
              {open && <span>Teachers</span>}
            </Link>
          </nav>
        </div>

        <div
          className={`flex-1 p-8 text-white transition-all duration-700
          ${open ? "ml-60" : "ml-20"}`}
        >
          <button
            onClick={() => setOpen(!open)}
            className="mb-6 bg-[#1E1E2F] p-2 rounded-lg hover:bg-[#2A2A40] transition-colors duration-300"
          >
            {open ? <BsArrowBarLeft size={24} /> : <BsArrowBarRight size={24} />}
          </button>

          <Routes>
            <Route path="/" element={<Navigate to="/students" replace />} />

            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />

            <Route path="/students/:id" element={<SingleStudent />} />
            <Route path="/teachers/:id" element={<SingleTeacher />} />

            <Route
              path="*"
              element={
                <h1 className="text-3xl font-bold text-center mt-20">
                  Page Not Found
                </h1>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
