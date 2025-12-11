import axios from "axios";
import { useEffect, useState } from "react";

export default function Teachers() {
  const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://6923ebff3ad095fb84720700.mockapi.io/Teachers")
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
      <h1 className="text-2xl font-bold text-white mb-6">Teachers</h1>
  {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-12 h-12 border-4 border-pink-300 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-gradient-to-br from-[#D4A8D6] to-[#FDF0F5] backdrop-blur-xl border border-white/20 shadow-[0_0_25px_rgba(255,90,200,0.5)] text-[#F7EEF5]"
            >
              <img
                src={item.avatar}
                className="w-16 h-16 rounded-full mb-3"
                alt=""
              />

              <h2 className="text-lg font-semibold">{item.LastName}</h2>

              <p className="text-sm">Age: {item.age}</p>
              <p className="text-sm">Gender: {item.gender}</p>
              <p className="text-sm">Phone: {item.phone}</p>
              <p className="text-sm">Birthday: {item.birthday}</p>

              <p className="mt-3 font-bold">Profession: {item.profession}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}