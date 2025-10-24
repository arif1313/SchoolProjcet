

const StudentPhoto = () => {
    return (
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-[#951B1C] mb-4">📷 Upload Student Photo</h2>
            <input type="file" accept="image/*" className="border p-2 rounded w-full mb-4" />
            <button className="bg-[#951B1C] text-white py-2 px-4 rounded hover:bg-[#7a1416]">
                Upload Photo
            </button>
        </div>
    );
};

export default StudentPhoto;
