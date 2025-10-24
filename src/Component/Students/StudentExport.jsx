

const StudentExport = () => {
    return (
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto text-center">
            <h2 className="text-2xl font-semibold text-[#951B1C] mb-4">📑 Export / Print Class List</h2>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 m-2">
                Export to Excel
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 m-2">
                Print
            </button>
        </div>
    );
};

export default StudentExport;
