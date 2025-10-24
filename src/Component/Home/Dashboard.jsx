import {
    FaUserGraduate,
    FaChalkboardTeacher,
    FaUsers,
    FaMoneyBillWave,
    FaSchool,
    FaBell,
} from "react-icons/fa";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

const Dashboard = () => {
    const overview = [
        { label: "Students", value: 520, icon: <FaUserGraduate />, color: "bg-blue-500" },
        { label: "Teachers", value: 35, icon: <FaChalkboardTeacher />, color: "bg-green-500" },
        { label: "Classes", value: 10, icon: <FaSchool />, color: "bg-orange-500" },
        { label: "Income (BDT)", value: "1.2L", icon: <FaMoneyBillWave />, color: "bg-purple-500" },
        { label: "Expenses (BDT)", value: "80K", icon: <FaUsers />, color: "bg-red-500" },
    ];

    const pieData = [
        { name: "Present", value: 420 },
        { name: "Absent", value: 60 },
        { name: "Late", value: 20 },
    ];
    const COLORS = ["#22c55e", "#ef4444", "#f59e0b"];

    const barData = [
        { month: "Jan", fees: 50000, admitted: 10 },
        { month: "Feb", fees: 60000, admitted: 12 },
        { month: "Mar", fees: 75000, admitted: 15 },
        { month: "Apr", fees: 70000, admitted: 8 },
        { month: "May", fees: 90000, admitted: 20 },
    ];

    const events = [
        { date: "25 Oct 2025", title: "Half-Yearly Exam Starts" },
        { date: "01 Nov 2025", title: "Science Fair" },
        { date: "15 Nov 2025", title: "Parent-Teacher Meeting" },
    ];

    const notifications = [
        "Exam schedule for Class 8 updated.",
        "Fee submission deadline extended.",
        "New teacher joined in Class 5.",
        "Sports day registration open.",
    ];

    return (
        <div className=" p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-[#951B1C] mb-6">🏫 Dashboard Overview</h1>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {overview.map((item, idx) => (
                    <div
                        key={idx}
                        className={`${item.color} text-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center`}
                    >
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <h3 className="text-lg font-semibold">{item.label}</h3>
                        <p className="text-2xl font-bold">{item.value}</p>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-lg p-4">
                    <h2 className="text-xl font-semibold text-[#951B1C] mb-3">
                        ⏰ Today’s Attendance Summary
                    </h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
                                {pieData.map((entry, index) => (
                                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-4">
                    <h2 className="text-xl font-semibold text-[#951B1C] mb-3">📈 Monthly Report</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={barData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="fees" fill="#951B1C" name="Total Fees" />
                            <Bar dataKey="admitted" fill="#f59e0b" name="New Admissions" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Events & Notifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-4">
                    <h2 className="text-xl font-semibold text-[#951B1C] mb-3">📅 Upcoming Events</h2>
                    <ul className="divide-y divide-gray-200">
                        {events.map((ev, i) => (
                            <li key={i} className="py-2 flex justify-between items-center">
                                <span className="font-medium text-gray-700">{ev.title}</span>
                                <span className="text-sm text-gray-500">{ev.date}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-4">
                    <h2 className="text-xl font-semibold text-[#951B1C] mb-3 flex items-center gap-2">
                        <FaBell /> Recent Notifications
                    </h2>
                    <ul className="list-disc pl-5 text-gray-700">
                        {notifications.map((note, i) => (
                            <li key={i} className="mb-2">
                                {note}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
