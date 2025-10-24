import { useState } from "react";

const TeacherAttendance = () => {
    const [teachers, setTeachers] = useState([
        { id: 1, name: "Mr. Arif Hossen", status: "Present" },
        { id: 2, name: "Ms. Fatima Noor", status: "Absent" },
        { id: 3, name: "Mr. Kamal Uddin", status: "Present" },
        { id: 4, name: "Ms. Rina Akter", status: "Present" },
    ]);

    const handleStatusChange = (id, status) => {
        setTeachers((prev) =>
            prev.map((teacher) =>
                teacher.id === id ? { ...teacher, status } : teacher
            )
        );
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#951B1C] mb-4">
                🧾 Teacher Attendance
            </h2>

            <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
                <thead className="bg-[#951B1C] text-white">
                    <tr>
                        <th className="py-2 px-4 text-left">#</th>
                        <th className="py-2 px-4 text-left">Teacher Name</th>
                        <th className="py-2 px-4 text-left">Status</th>
                        <th className="py-2 px-4 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teacher, idx) => (
                        <tr
                            key={teacher.id}
                            className={idx % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}
                        >
                            <td className="py-2 px-4">{idx + 1}</td>
                            <td className="py-2 px-4">{teacher.name}</td>
                            <td className="py-2 px-4">{teacher.status}</td>
                            <td className="py-2 px-4 flex gap-2">
                                <button
                                    onClick={() => handleStatusChange(teacher.id, "Present")}
                                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                                >
                                    Present
                                </button>
                                <button
                                    onClick={() => handleStatusChange(teacher.id, "Absent")}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                >
                                    Absent
                                </button>
                                <button
                                    onClick={() => handleStatusChange(teacher.id, "Late")}
                                    className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                                >
                                    Late
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeacherAttendance;
