
import { FaMoneyBillWave, FaFileInvoiceDollar } from "react-icons/fa";

const FinanceManagement = () => {
    const finance = [
        { label: "Fees Collected", value: "1.2L BDT", icon: <FaMoneyBillWave />, color: "bg-green-500" },
        { label: "Salary Paid", value: "70K BDT", icon: <FaFileInvoiceDollar />, color: "bg-purple-500" },
        { label: "Other Expenses", value: "10K BDT", icon: <FaMoneyBillWave />, color: "bg-red-500" },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#951B1C] mb-4">🧾 Finance Management</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {finance.map((item, i) => (
                    <div key={i} className={`p-6 rounded-xl shadow-lg text-white flex flex-col items-center justify-center ${item.color}`}>
                        <div className="text-4xl mb-2">{item.icon}</div>
                        <h3 className="text-lg font-semibold">{item.label}</h3>
                        <p className="text-2xl font-bold">{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FinanceManagement;
