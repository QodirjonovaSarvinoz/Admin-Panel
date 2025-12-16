import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function SingleTeacher() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://6923ebff3ad095fb84720700.mockapi.io/Teachers/${id}`)
      .then((res) => {
        setTeacher(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <div className="w-14 h-14 border-4 border-pink-300 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!teacher) return <h1>Teacher not found</h1>;

  return (
    <div className="max-w-xl mx-auto bg-gradient-to-br from-[#D4A8D6] to-[#FDF0F5] p-6 rounded-2xl shadow-xl text-[#5B3B5F]">
      <img
        src={teacher.avatar}
        className="w-28 h-28 rounded-full mx-auto mb-4"
        alt=""
      />

      <h1 className="text-2xl font-bold text-center mb-4">
        {teacher.LastName}
      </h1>

      <div className="space-y-2">
        <p><b>Age:</b> {teacher.age}</p>
        <p><b>Gender:</b> {teacher.gender}</p>
        <p><b>Phone:</b> {teacher.phone}</p>
        <p><b>Birthday:</b> {teacher.birthday}</p>
        <p><b>Profession:</b> {teacher.profession}</p>
      </div>

      <Link
        to="/teachers"
        className="block text-center mt-6 bg-pink-200 font-bold py-2 rounded-lg"
      >
         Back to Teachers
      </Link>
    </div>
  );
}
