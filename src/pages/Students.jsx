
import axios from "axios";
import { useEffect, useState } from "react";

export default function Students() {
  const API = "https://6923ebff3ad095fb84720700.mockapi.io/Students";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const emptyForm = {
    firstName: "",
    age: "",
    gender: "",
    birthday: "",
    phone: "",
    level: "",
    coin: "",
    avatar: "",
  };

  const [form, setForm] = useState(emptyForm);

  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async () => {
    try {
      if (editingItem) {
        const res = await axios.put(`${API}/${editingItem.id}`, form);
        setData((prev) =>
          prev.map((i) => (i.id === editingItem.id ? res.data : i))
        );
      } else {
        const res = await axios.post(API, form);
        setData((prev) => [...prev, res.data]);
      }

      setShowModal(false);
      setForm(emptyForm);
      setEditingItem(null);
    } catch (err) {
      console.log(err);
    }
  };

   const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?"))
      return;
    try {
      await axios.delete(`${API}/${id}`);
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Students</h1>

        <button
          onClick={() => {
            setForm(emptyForm);
            setEditingItem(null);
            setShowModal(true);
          }}
          className="bg-[#9DB6CF] text-[#1E1E2F] px-4 py-2 rounded-lg font-semibold"
        >
          + Add Student
        </button>
      </div>

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
                alt=""
                className="w-16 h-16 rounded-full mb-3"
              />

              <h2 className="text-lg font-semibold">{item.firstName}</h2>
              <p className="text-sm">Age: {item.age}</p>
              <p className="text-sm">Gender: {item.gender}</p>
              <p className="text-sm">Birthday: {item.birthday}</p>
              <p className="text-sm">Phone: {item.phone}</p>

              <div className="mt-3 flex justify-between items-center">
                <div>
                  <p className="font-bold">Level: {item.level}</p>
                  <p className="font-bold">Coins: {item.coin}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingItem(item);
                      setForm(item);
                      setShowModal(true);
                    }}
                    className="bg-[#788AB2] text-white px-3 py-1 rounded-md text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-400 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-[#D6E8EE] p-6 rounded-xl w-[400px]">
            <h2 className="text-xl font-bold mb-4 text-[#1E1E2F]">
              {editingItem ? "Edit Student" : "Add Student"}
            </h2>

            {Object.keys(emptyForm).map((key) => (
              <input
                key={key}
                placeholder={key}
                value={form[key]}
                onChange={(e) =>
                  setForm({ ...form, [key]: e.target.value })
                }
                className="w-full mb-2 p-2 rounded bg-white text-[#1E1E2F] placeholder-gray-500"
              />
            ))}

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-400 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-[#788AB2] text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
