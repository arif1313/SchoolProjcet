
import { Outlet } from "react-router-dom";
import SidebarSchool from "./Component/Layout/SidebarSchool";

const App = () => {
  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* 🏫 Sidebar (20%) */}
      <div className="fixed left-0 top-0 h-full w-[20%] hidden md:block lg:block z-50">
        <SidebarSchool />
      </div>

      {/* 📘 Main Content (80%) */}
      <div className="ml-[20%] w-[80%] h-full overflow-y-auto scroll-smooth p-4">
        <section id="dashboard">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default App;
