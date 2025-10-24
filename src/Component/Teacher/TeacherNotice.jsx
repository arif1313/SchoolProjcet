import { useState } from "react";
import { FaBullhorn } from "react-icons/fa";

const TeacherNotice = () => {
    const [notices, setNotices] = useState([
        "Exam schedule updated.",
        "New teacher joined Class 5.",
    ]);
    const [newNotice, setNewNotice] = useState("");

    const addNotice = () => {
        if (newNotice.trim() === "") return;
        setNotices([newNotice, ...notices]);
        setNewNotice("");
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#951B1C] mb-4 flex items-center gap-2">
                <FaBullhorn /> Teacher Notice Board
            </h2>

            <div className="mb-4 flex gap-2">
                <input
                    type="text"
                    placeholder="New notice..."
                    value={newNotice}
                    onChange={(e) => setNewNotice(e.target.value)}
                    className="flex-1 border p-2 rounded-lg"
                />
                <button
                    onClick={addNotice}
                    className="bg-[#951B1C] text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                    Add
                </button>
            </div>

            <ul className="list-disc pl-5 space-y-2">
                {notices.map((notice, idx) => (
                    <li key={idx} className="bg-white p-2 rounded shadow">{notice}</li>
                ))}
            </ul>
        </div>
    );
};

export default TeacherNotice;
