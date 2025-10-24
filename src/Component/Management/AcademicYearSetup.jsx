import { useState } from "react";

const AcademicYearSetup = () => {
    const [years, setYears] = useState(["2024", "2025", "2026"]);

    const addYear = () => {
        const nextYear = (parseInt(years[years.length - 1]) + 1).toString();
        setYears([...years, nextYear]);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#951B1C] mb-4">🏫 Academic Year Setup</h2>
            <div className="flex gap-4 flex-wrap">
                {years.map((year, i) => (
                    <div key={i} className="p-4 bg-white shadow-md rounded-lg border text-center w-32">
                        {year}
                    </div>
                ))}
                <button
                    onClick={addYear}
                    className="p-4 bg-[#951B1C] text-white rounded-lg shadow-md hover:bg-[#7a1518] transition"
                >
                    + Add Year
                </button>
            </div>
        </div>
    );
};

export default AcademicYearSetup;
