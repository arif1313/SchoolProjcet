import { useState } from "react";

const StudentForm = () => {
    const [form, setForm] = useState({ name: "", class: "", age: "", guardian: "" });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", form);
        alert("Student saved successfully!");
    };

    return (
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-[#951B1C] mb-4">➕ Add / Edit Student</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Student Name"
                    value={form.name}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="class"
                    placeholder="Class"
                    value={form.class}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={form.age}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="guardian"
                    placeholder="Guardian Name"
                    value={form.guardian}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <button type="submit" className="bg-[#951B1C] text-white py-2 rounded hover:bg-[#7a1416]">
                    Save Student
                </button>
            </form>
        </div>
    );
};

export default StudentForm;
