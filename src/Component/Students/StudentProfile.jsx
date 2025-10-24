
import { useParams } from "react-router-dom";

const StudentProfile = () => {
    const { id } = useParams();
    // Example data
    const student = { id, name: "John Doe", class: "5A", age: 10, guardian: "Mr. Doe", contact: "017XXXXXXX" };

    return (
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-[#951B1C] mb-4">👤 Student Profile</h2>
            <ul className="space-y-2">
                <li><strong>Name:</strong> {student.name}</li>
                <li><strong>Class:</strong> {student.class}</li>
                <li><strong>Age:</strong> {student.age}</li>
                <li><strong>Guardian:</strong> {student.guardian}</li>
                <li><strong>Contact:</strong> {student.contact}</li>
            </ul>
        </div>
    );
};

export default StudentProfile;
