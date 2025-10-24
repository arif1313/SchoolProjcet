
import { NavLink, Outlet } from "react-router-dom";
import {
    FaUsers,

    FaMoneyBillWave,
    FaRegClock,
    FaUserShield,
    FaCalendarAlt
} from "react-icons/fa";

const ManagementDashboard = () => {
    const features = [
        { path: "overview", label: "Overview Stats", icon: <FaUsers />, color: "bg-blue-500" },
        { path: "shift", label: "Shift Management", icon: <FaRegClock />, color: "bg-green-500" },
        { path: "finance", label: "Fees & Salary", icon: <FaMoneyBillWave />, color: "bg-purple-500" },
        { path: "roles", label: "User Roles", icon: <FaUserShield />, color: "bg-yellow-500" },
        { path: "academic-year", label: "Academic Year Setup", icon: <FaCalendarAlt />, color: "bg-red-500" },
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen ">
            <h1 className="text-3xl font-bold text-[#951B1C] mb-6">🗂️ Management Dashboard</h1>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                {features.map((feature) => (
                    <NavLink
                        key={feature.path}
                        to={feature.path}
                        className={`flex flex-col items-center justify-center gap-4 p-6 rounded-xl shadow-lg text-white font-semibold transition transform hover:scale-105 ${feature.color}`}
                    >
                        <div className="text-4xl">{feature.icon}</div>
                        <span className="text-lg">{feature.label}</span>
                    </NavLink>
                ))}
            </div>

            <div className="mt-8">
                <Outlet />
            </div>
        </div>
    );
};

export default ManagementDashboard;
