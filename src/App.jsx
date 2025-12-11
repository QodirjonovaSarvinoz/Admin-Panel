import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <div className="w-60 bg-[#1E1E2F] text-white p-5  space-y-6 fixed h-screen w-60">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

          <nav className="flex flex-col gap-3">
            <Link
              to="/students"
              className=" bg-gradient-to-br from-[#9DB6CF] to-[#D6E8EE] backdrop-blur-xl shadow-[0_0_25px_rgba(122,98,255,0.5)] px-4 py-2 rounded-lg transition-colors"
            >
              Students
            </Link>

            <Link
              to="/teachers"
              className="bg-gradient-to-br from-[#D4A8D6] to-[#FDF0F5] backdrop-blur-xl border border-white/20 shadow-[0_0_25px_rgba(255,90,200,0.5)] px-4 py-2 rounded-lg hover:bg-[#FF82DD] transition-colors"
            >
              Teachers
            </Link>
          </nav>
        </div>

        <div className="flex-1 ml-60 p-8 bg-[#12121C] text-white overflow-auto">
          <Routes>
          
            <Route path="/" element={<Navigate to="/students" replace />} />

            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />

            <Route path="*" element={<h1 className="text-3xl font-bold text-center mt-20">Page Not Found</h1>} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

