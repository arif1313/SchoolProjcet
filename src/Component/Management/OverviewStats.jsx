
import { FaUsers, FaChalkboardTeacher, FaMoneyBillWave } from "react-icons/fa";

const OverviewStats = () => {
    const stats = [
        { label: "Total Students", value: 520, icon: <FaUsers />, color: "bg-blue-500" },
        { label: "Total Teachers", value: 35, icon: <FaChalkboardTeacher />, color: "bg-green-500" },
        { label: "Total Revenue", value: "1.2L BDT", icon: <FaMoneyBillWave />, color: "bg-purple-500" },
        { label: "Total Expenses", value: "80K BDT", icon: <FaMoneyBillWave />, color: "bg-red-500" },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#951B1C] mb-4">📊 Overview Stats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((item, i) => (
                    <div key={i} className={`p-6 rounded-xl shadow-lg text-white flex flex-col items-center justify-center ${item.color}`}>
                        <div className="text-4xl mb-2">{item.icon}</div>
                        <h3 className="text-lg font-semibold">{item.label}</h3>
                        <p className="text-2xl font-bold">{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OverviewStats;
