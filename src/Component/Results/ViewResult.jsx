

const ViewResult = () => {
    const results = [
        { student: "John Doe", subject: "Math", total: 95, grade: "A+" },
        { student: "Jane Smith", subject: "English", total: 88, grade: "A" },
    ];

    return (
        <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-[#951B1C] mb-4">🔍 View Results</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Student</th>
                        <th className="border px-4 py-2">Subject</th>
                        <th className="border px-4 py-2">Total</th>
                        <th className="border px-4 py-2">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((r, i) => (
                        <tr key={i} className="text-center hover:bg-gray-100">
                            <td className="border px-4 py-2">{r.student}</td>
                            <td className="border px-4 py-2">{r.subject}</td>
                            <td className="border px-4 py-2">{r.total}</td>
                            <td className="border px-4 py-2">{r.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewResult;
