import { useState } from "react";
import { FaTasks } from "react-icons/fa";

const TeacherAssign = () => {
    const [assignment, setAssignment] = useState({
        teacher: "",
        class: "",
        subject: "",
    });

    const handleChange = (e) => {
        setAssignment({ ...assignment, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Assignment:", assignment);
        alert("Teacher assigned successfully!");
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#951B1C] mb-4 flex items-center gap-2">
                <FaTasks /> Assign Teacher to Class/Subject
            </h2>

            <form className="bg-white p-6 rounded-xl shadow-lg max-w-md" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Teacher Name</label>
                    <input
                        type="text"
                        name="teacher"
                        value={assignment.teacher}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-lg"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 font-medium">Class</label>
                    <input
                        type="text"
                        name="class"
                        value={assignment.class}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-lg"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 font-medium">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        value={assignment.subject}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-lg"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#951B1C] text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                    Assign
                </button>
            </form>
        </div>
    );
};

export default TeacherAssign;
