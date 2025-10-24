

const StudentList = () => {
    const students = [
        { id: 1, name: "John Doe", class: "5A", age: 10 },
        { id: 2, name: "Jane Smith", class: "6B", age: 11 },
    ];

    return (
        <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-[#951B1C] mb-4">📋 Student List</h2>
            <table className="w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Class</th>
                        <th className="border px-4 py-2">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((s) => (
                        <tr key={s.id} className="text-center hover:bg-gray-100">
                            <td className="border px-4 py-2">{s.id}</td>
                            <td className="border px-4 py-2">{s.name}</td>
                            <td className="border px-4 py-2">{s.class}</td>
                            <td className="border px-4 py-2">{s.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
