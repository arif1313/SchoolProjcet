import { useState } from "react";

const EnterResult = () => {
    const [result, setResult] = useState({ student: "", subject: "", tutorial: "", written: "", mcq: "" });

    const handleChange = (e) => setResult({ ...result, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Result saved for ${result.student} in ${result.subject}`);
    };

    return (
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-[#951B1C] mb-4">🧾 Enter Results</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" name="student" placeholder="Student Name" value={result.student} onChange={handleChange} className="border p-2 rounded" />
                <input type="text" name="subject" placeholder="Subject" value={result.subject} onChange={handleChange} className="border p-2 rounded" />
                <input type="number" name="tutorial" placeholder="Tutorial Marks" value={result.tutorial} onChange={handleChange} className="border p-2 rounded" />
                <input type="number" name="written" placeholder="Written Marks" value={result.written} onChange={handleChange} className="border p-2 rounded" />
                <input type="number" name="mcq" placeholder="MCQ Marks" value={result.mcq} onChange={handleChange} className="border p-2 rounded" />
                <button type="submit" className="bg-[#951B1C] text-white py-2 rounded hover:bg-[#7a1416]">Save Result</button>
            </form>
        </div>
    );
};

export default EnterResult;
