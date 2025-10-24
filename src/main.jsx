import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx';
import Home4 from './Component/Home/Dashboard.jsx';
import TeacherDashboard from './Component/Teacher/TeacherDashboard.jsx';
import TeacherList from './Component/Teacher/TeacherList.jsx';
import TeacherForm from './Component/Teacher/TeacherForm.jsx';
import TeacherProfile from './Component/Teacher/TeacherProfile.jsx';
import TeacherAssign from './Component/Teacher/TeacherAssign.jsx';
import TeacherNotice from './Component/Teacher/TeacherNotice.jsx';
import TeacherAttendance from './Component/Teacher/TeacherAttendance.jsx';
import StudentDashboard from './Component/Students/StudentDashboard.jsx';
import StudentList from './Component/Students/StudentList.jsx';
import StudentForm from './Component/Students/StudentForm.jsx';
import StudentProfile from './Component/Students/StudentProfile.jsx';
import StudentAttendance from './Component/Students/StudentAttendance.jsx';
import StudentImport from './Component/Students/StudentImport.jsx';
import StudentPhoto from './Component/Students/StudentPhoto.jsx';
import StudentExport from './Component/Students/StudentExport.jsx';
import ResultDashboard from './Component/Results/ResultDashboard.jsx';
import EnterResult from './Component/Results/EnterResult.jsx';
import ViewResult from './Component/Results/ViewResult.jsx';
import CalculateGrades from './Component/Results/CalculateGrades.jsx';
import ClassPerformance from './Component/Results/ClassPerformance.jsx';
import PrintClassResult from './Component/Results/PrintClassResult.jsx';
import PrintReportCard from './Component/Results/PrintReportCard.jsx';
import TopStudents from './Component/Results/TopStudents.jsx';
import ExportResult from './Component/Results/ExportResult.jsx';
import Payment from './Component/Payment/Payment.jsx';
import ManagementDashboard from './Component/Management/ManagementDashboard.jsx';
import OverviewStats from './Component/Management/OverviewStats.jsx';
import ShiftManagement from './Component/Management/ShiftManagement.jsx';
import FinanceManagement from './Component/Management/FinanceManagement.jsx';
import UserRoles from './Component/Management/UserRoles.jsx';
import AcademicYearSetup from './Component/Management/AcademicYearSetup.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home4 />,
      },

      {
        path: "teacher", element: <TeacherDashboard />,
        children: [
          { path: "list", element: <TeacherList /> },
          { path: "add", element: <TeacherForm /> },
          { path: "profile/:id", element: <TeacherProfile /> },
          { path: "attendance", element: <TeacherAttendance /> },
          { path: "assign", element: <TeacherAssign /> },
          { path: "notice", element: <TeacherNotice /> },
        ],
      }
      ,
      {
        path: "students",
        element: <StudentDashboard />,
        children: [
          { path: "list", element: <StudentList /> },
          { path: "add", element: <StudentForm /> },
          { path: "profile/:id", element: <StudentProfile /> },
          { path: "attendance", element: <StudentAttendance /> },
          { path: "import", element: <StudentImport /> },
          { path: "photo", element: <StudentPhoto /> },
          { path: "export", element: <StudentExport /> },
        ]
      },
      {
        path: "result",
        element: <ResultDashboard />,
        children: [
          { path: "enter", element: <EnterResult /> },
          { path: "view", element: <ViewResult /> },
          { path: "calculate", element: <CalculateGrades /> },
          { path: "performance", element: <ClassPerformance /> },
          { path: "print-class", element: <PrintClassResult /> },
          { path: "print-individual", element: <PrintReportCard /> },
          { path: "top3", element: <TopStudents /> },
          { path: "export", element: <ExportResult /> },
        ]
      },
      {
        path: "Payment",
        element: <Payment />,

      },
      {
        path: "/management", element: <ManagementDashboard />, children: [
          { path: "overview", element: <OverviewStats /> },
          { path: "shift", element: <ShiftManagement /> },
          { path: "finance", element: <FinanceManagement /> },
          { path: "roles", element: <UserRoles /> },
          { path: "academic-year", element: <AcademicYearSetup /> },
        ]
      }


    ]
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
