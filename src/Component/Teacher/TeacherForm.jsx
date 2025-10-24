import { useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";

const TeacherForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        class: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        alert("Teacher added/updated successfully!");
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#951B1C] mb-4 flex items-center gap-2">
                <FaChalkboardTeacher /> Add / Edit Teacher
            </h2>

            <form className="bg-white p-6 rounded-xl shadow-lg max-w-lg" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-lg"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
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
                        value={formData.subject}
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
                        value={formData.class}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-lg"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#951B1C] text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default TeacherForm;
