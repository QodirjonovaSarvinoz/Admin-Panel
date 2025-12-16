import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function SingleStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://6923ebff3ad095fb84720700.mockapi.io/Students/${id}`)
      .then((res) => {
        setStudent(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <div className="w-14 h-14 border-4 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!student) return <h1>Student not found</h1>;

  return (
    <div className="max-w-xl mx-auto bg-gradient-to-br from-[#9DB6CF] to-[#D6E8EE] p-6 rounded-2xl shadow-xl text-[#788AB2]">
      <img
        src={student.avatar}
        className="w-28 h-28 rounded-full mx-auto mb-4"
        alt=""
      />

      <h1 className="text-2xl font-bold text-center mb-4">
        {student.firstName}
      </h1>

      <div className="space-y-2">
        <p><b>Age:</b> {student.age}</p>
        <p><b>Gender:</b> {student.gender}</p>
        <p><b>Birthday:</b> {student.birthday}</p>
        <p><b>Phone:</b> {student.phone}</p>
        <p><b>Level:</b> {student.level}</p>
        <p><b>Coins:</b> {student.coin}</p>
      </div>

      <Link
        to="/students"
        className="block text-center mt-6 bg-[#C9E1E6] text-[#788AB2] font-bold py-2 rounded-lg"
      >
        Back to Students
      </Link>
    </div>
  );
}
