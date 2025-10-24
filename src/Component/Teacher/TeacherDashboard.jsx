import { NavLink, Outlet } from "react-router-dom";
import {
    FaUserGraduate,
    FaChalkboardTeacher,
    FaClipboardList,
    FaTasks,
    FaBullhorn
} from "react-icons/fa";

const TeacherDashboard = () => {
    const features = [
        { path: "list", label: "Teacher List", icon: <FaUserGraduate />, color: "bg-blue-500" },
        { path: "add", label: "Add / Edit Teacher", icon: <FaChalkboardTeacher />, color: "bg-green-500" },
        { path: "attendance", label: "Attendance", icon: <FaClipboardList />, color: "bg-purple-500" },
        { path: "assign", label: "Assign Class/Subject", icon: <FaTasks />, color: "bg-yellow-500" },
        { path: "notice", label: "Notice Board", icon: <FaBullhorn />, color: "bg-red-500" },
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-[#951B1C] mb-6">🧑‍🏫 Teacher Dashboard</h1>

            {/* Features as Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                {features.map((feature) => (
                    <NavLink
                        key={feature.path}
                        to={feature.path}
                        className={({ isActive }) =>
                            `flex flex-col items-center justify-center gap-4 p-6 rounded-xl shadow-lg text-white font-semibold transition transform hover:scale-105 ${feature.color} ${isActive ? "ring-4 ring-offset-2 ring-[#951B1C]" : ""
                            }`
                        }
                    >
                        <div className="text-4xl">{feature.icon}</div>
                        <span className="text-lg">{feature.label}</span>
                    </NavLink>
                ))}
            </div>

            {/* Outlet for rendering selected feature */}
            <div className="mt-8">
                <Outlet />
            </div>
        </div>
    );
};

export default TeacherDashboard;
