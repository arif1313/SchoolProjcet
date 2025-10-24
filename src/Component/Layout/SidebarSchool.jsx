
import {
    FaChalkboardTeacher,
    FaUsers,
    FaUserGraduate,
    FaMoneyBillWave,
    FaChartBar,
    FaSignOutAlt,
    FaClipboardList,

} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import schoolLogo from "../../../public/LilyLogo.png";

const SidebarSchool = () => {
    const links = [
        { path: "/", label: "Dashboard", icon: <FaChartBar /> },
        { path: "/management", label: "Management", icon: <FaUsers /> },
        { path: "/teacher", label: "Teachers", icon: <FaChalkboardTeacher /> },
        { path: "/students", label: "Students", icon: <FaUserGraduate /> },
        { path: "/Payment", label: "Payments", icon: <FaMoneyBillWave /> },
        { path: "/result", label: "Result", icon: <FaClipboardList /> },


    ];

    return (
        <div className="fixed top-0 left-0 h-full w-[20%] bg-[#951B1C] text-white flex flex-col p-6 shadow-2xl z-50">
            {/* 🏫 School Header / Logo */}
            <div className="flex flex-col items-center p-4 border-b border-gray-300/30">
                <div className="rounded-full overflow-hidden h-20 w-20 border-4 border-whiten bg-white">
                    <img
                        src={schoolLogo}
                        alt="School Logo"
                        className="object-cover h-full w-full"
                    />
                </div>
                <div className="py-3 text-center">
                    <h3 className="font-bold text-2xl">Lily International School</h3>
                    <p className="text-sm text-gray-200">School Management System</p>
                </div>
            </div>

            {/* 📋 Navigation Links */}
            <ul className="flex flex-col gap-3 mt-6 w-full">
                {links.map((link) => (
                    <li key={link.path} className="w-full">
                        <NavLink
                            to={link.path}
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300
                 ${isActive
                                    ? "bg-white text-[#951B1C] font-semibold scale-105"
                                    : "hover:bg-white/20 hover:scale-105"}`
                            }
                        >
                            <span className="text-xl">{link.icon}</span>
                            <span className="text-lg font-medium">{link.label}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* 🚪 Logout Button */}
            <div className="mt-auto">
                <button className="flex items-center justify-center gap-2 bg-white text-[#951B1C] w-full py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                    <FaSignOutAlt /> Logout
                </button>
            </div>
        </div>
    );
};

export default SidebarSchool;
