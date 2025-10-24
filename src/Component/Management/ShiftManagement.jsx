import { useState } from "react";

const ShiftManagement = () => {
    const [shifts, setShifts] = useState([
        { id: 1, name: "Morning", start: "08:00 AM", end: "12:00 PM" },
        { id: 2, name: "Day", start: "12:30 PM", end: "04:30 PM" },
        { id: 3, name: "Evening", start: "05:00 PM", end: "09:00 PM" },
    ]);

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#951B1C] mb-4">🕒 Shift Management</h2>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-[#951B1C] text-white">
                    <tr>
                        <th className="py-2 px-4">Shift</th>
                        <th className="py-2 px-4">Start Time</th>
                        <th className="py-2 px-4">End Time</th>
                    </tr>
                </thead>
                <tbody>
                    {shifts.map((shift) => (
                        <tr key={shift.id} className="text-center border-b">
                            <td className="py-2">{shift.name}</td>
                            <td className="py-2">{shift.start}</td>
                            <td className="py-2">{shift.end}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShiftManagement;
