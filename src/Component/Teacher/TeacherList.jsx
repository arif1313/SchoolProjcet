
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeacherList = () => {
    const teachers = [
        { id: 1, name: "John Doe", subject: "Math" },
        { id: 2, name: "Jane Smith", subject: "Science" },
        { id: 3, name: "Michael Johnson", subject: "English" },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#951B1C] mb-4 flex items-center gap-2">
                <FaUserGraduate /> Teacher List
            </h2>
            <table className="w-full table-auto border-collapse border border-gray-300 bg-white rounded-lg shadow">
                <thead className="bg-[#951B1C] text-white">
                    <tr>
                        <th className="p-2 border">ID</th>
                        <th className="p-2 border">Name</th>
                        <th className="p-2 border">Subject</th>
                        <th className="p-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((t) => (
                        <tr key={t.id} className="text-center">
                            <td className="p-2 border">{t.id}</td>
                            <td className="p-2 border">{t.name}</td>
                            <td className="p-2 border">{t.subject}</td>
                            <td className="p-2 border">
                                <Link
                                    to={`profile/${t.id}`}
                                    className="text-blue-500 hover:underline"
                                >
                                    View Profile
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeacherList;
