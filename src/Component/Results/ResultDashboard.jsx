
import { NavLink, Outlet } from "react-router-dom";
import { FaFileAlt, FaSearch, FaCalculator, FaChartBar, FaPrint, FaTrophy, FaFileExport } from "react-icons/fa";

const ResultDashboard = () => {
    const features = [
        { path: "enter", label: "Enter Results", icon: <FaFileAlt />, color: "bg-blue-500" },
        { path: "view", label: "View Results", icon: <FaSearch />, color: "bg-green-500" },
        { path: "calculate", label: "Calculate Grades", icon: <FaCalculator />, color: "bg-purple-500" },
        { path: "performance", label: "Class Performance Chart", icon: <FaChartBar />, color: "bg-yellow-500" },
        { path: "print-class", label: "Print Class Result", icon: <FaPrint />, color: "bg-orange-500" },
        { path: "print-individual", label: "Print Report Card", icon: <FaPrint />, color: "bg-red-500" },
        { path: "top3", label: "Top 3 Students", icon: <FaTrophy />, color: "bg-pink-500" },
        { path: "export", label: "Export Results", icon: <FaFileExport />, color: "bg-teal-500" },
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-[#951B1C] mb-6">🧮 Result Management</h1>

            {/* Features as Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {features.map((feature) => (
                    <NavLink
                        key={feature.path}
                        to={feature.path}
                        className={`flex flex-col items-center justify-center gap-4 p-6 rounded-xl shadow-lg text-white font-semibold transition transform hover:scale-105 ${feature.color}`}
                    >
                        <div className="text-4xl">{feature.icon}</div>
                        <span className="text-lg text-center">{feature.label}</span>
                    </NavLink>
                ))}
            </div>

            {/* Outlet for feature content */}
            <div className="mt-8">
                <Outlet />
            </div>
        </div>
    );
};

export default ResultDashboard;
