
const StudentAttendance = () => {
    const attendance = [
        { date: "2025-10-20", present: 25, absent: 5 },
        { date: "2025-10-21", present: 28, absent: 2 },
    ];

    return (
        <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-[#951B1C] mb-4">🧾 Student Attendance</h2>
            <table className="w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Date</th>
                        <th className="border px-4 py-2">Present</th>
                        <th className="border px-4 py-2">Absent</th>
                    </tr>
                </thead>
                <tbody>
                    {attendance.map((a, i) => (
                        <tr key={i} className="text-center hover:bg-gray-100">
                            <td className="border px-4 py-2">{a.date}</td>
                            <td className="border px-4 py-2">{a.present}</td>
                            <td className="border px-4 py-2">{a.absent}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentAttendance;
