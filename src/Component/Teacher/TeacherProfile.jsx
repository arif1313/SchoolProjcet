
import { useParams } from "react-router-dom";

const TeacherProfile = () => {
    const { id } = useParams();

    // Example profile data (replace with API later)
    const profile = {
        id,
        name: "John Doe",
        email: "john@example.com",
        subject: "Math",
        class: "8A",
        attendance: "95%",
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-md">
            <h2 className="text-2xl font-bold text-[#951B1C] mb-4">
                {profile.name} - Profile
            </h2>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Subject:</strong> {profile.subject}</p>
            <p><strong>Class:</strong> {profile.class}</p>
            <p><strong>Attendance:</strong> {profile.attendance}</p>
        </div>
    );
};

export default TeacherProfile;
