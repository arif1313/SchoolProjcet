
const StudentImport = () => {
    return (
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-[#951B1C] mb-4">📤 Import Student Data</h2>
            <input type="file" accept=".csv, .xlsx" className="border p-2 rounded w-full mb-4" />
            <button className="bg-[#951B1C] text-white py-2 px-4 rounded hover:bg-[#7a1416]">
                Upload
            </button>
        </div>
    );
};

export default StudentImport;
