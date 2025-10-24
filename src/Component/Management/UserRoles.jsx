

const UserRoles = () => {
    const roles = [
        { role: "Admin", permissions: "Full Access" },
        { role: "Teacher", permissions: "Manage Classes & Students" },
        { role: "Accountant", permissions: "Manage Fees & Salary" },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#951B1C] mb-4">🔐 User Roles</h2>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-[#951B1C] text-white">
                    <tr>
                        <th className="py-2 px-4">Role</th>
                        <th className="py-2 px-4">Permissions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((r, i) => (
                        <tr key={i} className="text-center border-b">
                            <td className="py-2">{r.role}</td>
                            <td className="py-2">{r.permissions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserRoles;
