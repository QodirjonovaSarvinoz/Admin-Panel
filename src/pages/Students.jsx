import axios from "axios";
import { useEffect, useState } from "react";

export default function Students() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
      .get("https://6923ebff3ad095fb84720700.mockapi.io/Students")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Students</h1>

     {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-12 h-12 border-4 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-gradient-to-br from-[#9DB6CF] to-[#D6E8EE] backdrop-blur-xl border border-white/20 shadow-[0_0_25px_rgba(122,98,255,0.5)] text-[#788AB2]"
            >
              <img
                src={item.avatar}
                className="w-16 h-16 rounded-full mb-3"
                alt=""
              />

              <h2 className="text-lg font-semibold">{item.firstName}</h2>

              <p className="text-[#788AB2] text-sm">Age: {item.age}</p>
              <p className="text-[#788AB2] text-sm">Gender: {item.gender}</p>
              <p className="text-[#788AB2] text-sm">Birthday: {item.birthday}</p>
              <p className="text-[#788AB2] text-sm">Phone: {item.phone}</p>

              <div className="mt-3">
                <p className="font-bold">Level: {item.level}</p>
                <p className="font-bold">Coins: {item.coin}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}