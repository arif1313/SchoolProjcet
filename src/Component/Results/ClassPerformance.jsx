
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const ClassPerformance = () => {
    const data = [
        { subject: "Math", average: 85 },
        { subject: "English", average: 78 },
        { subject: "Science", average: 90 },
        { subject: "Bangla", average: 82 },
    ];

    return (
        <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-[#951B1C] mb-4">📊 Class Performance Chart</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="average" fill="#951B1C" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ClassPerformance;
