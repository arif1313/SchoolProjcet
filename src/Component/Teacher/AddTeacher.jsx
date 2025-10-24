import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTeacher = () => {
    const [teacher, setTeacher] = useState({ name: "", subject: "", class: "" });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Add Teacher:", teacher);
        // Add API call here
        navigate("/teacher"); // back to dashboard
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen ml-[20%]">
            <h1 className="text-3xl font-bold text-[#951B1C] mb-6">➕ Add New Teacher</h1>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg max-w-md">
                <label className="block mb-3">
                    Name:
                    <input
                        type="text"
                        value={teacher.name}
                        onChange={(e) => setTeacher({ ...teacher, name: e.target.value })}
                        className="w-full border p-2 rounded mt-1"
                        required
                    />
                </label>

                <label className="block mb-3">
                    Subject:
                    <input
                        type="text"
                        value={teacher.subject}
                        onChange={(e) => setTeacher({ ...teacher, subject: e.target.value })}
                        className="w-full border p-2 rounded mt-1"
                        required
                    />
                </label>

                <label className="block mb-3">
                    Class:
                    <input
                        type="text"
                        value={teacher.class}
                        onChange={(e) => setTeacher({ ...teacher, class: e.target.value })}
                        className="w-full border p-2 rounded mt-1"
                        required
                    />
                </label>

                <button
                    type="submit"
                    className="bg-[#951B1C] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                    Save Teacher
                </button>
            </form>
        </div>
    );
};

export default AddTeacher;
