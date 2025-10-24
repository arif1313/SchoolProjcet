

const TopStudents = () => {
    const top3 = [
        { name: "John Doe", total: 95 },
        { name: "Jane Smith", total: 92 },
        { name: "Alex Brown", total: 90 },
    ];

    return (
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-[#951B1C] mb-4">🏆 Top 3 Students</h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                {top3.map((s, i) => (
                    <li key={i}>
                        {s.name} - Total: {s.total}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TopStudents;
