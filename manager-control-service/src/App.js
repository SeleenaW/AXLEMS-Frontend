// import React from "react";
// import { ToastContainer } from "react-toastify";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { SidebarItem } from "./components/sideNavBar";
// import "react-toastify/dist/ReactToastify.css";
// import Sidebar from "./components/sideNavBar";
// import AddExperience from "./components/experience/addExperience";
// import ViewExperience from "./components/experience";
// import PartnerRegistrationNonAPI from "./components/partner/partnerDetailsNonAPICreate";
// import Login from "./components/partner/login/Login";
// import ProtectedRoute from "./components/auth/ProtectedRoute";

// import { LayoutDashboard, Volleyball } from "lucide-react";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App flex h-screen">
//         <Sidebar>
//           <Link to="/dashboard">
//             <SidebarItem
//               icon={<LayoutDashboard size={20} />}
//               text="Dashboard"
//             />
//           </Link>
//           <Link to="/experience">
//             <SidebarItem icon={<Volleyball size={20} />} text="Experience" />
//           </Link>
//         </Sidebar>

//         <div className="flex-1 overflow-auto p-6 bg-gray-100">
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route
//               path="/dashboard"
//               element={
//                 <ProtectedRoute>
//                   <div>Welcome to Dashboard</div>
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/experience/add"
//               element={
//                 <ProtectedRoute>
//                   <AddExperience />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/experience"
//               element={
//                 <ProtectedRoute>
//                   <ViewExperience />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/partner/create"
//               element={
//                 <ProtectedRoute>
//                   <PartnerNonAPIDetailsFormCreate />
//                 </ProtectedRoute>
//               }
//             />
//           </Routes>
//         </div>

//         <ToastContainer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SidebarItem } from "./components/sideNavBar";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/sideNavBar";
import AddExperience from "./components/experience/addExperience";
import ViewExperience from "./components/experience";
import PartnerNonAPIDetailsFormCreate from "./components/partner/partnerDetailsNonAPICreate";
import Login from "./components/partner/login/Login";
import PartnerAPIDetailsFormCreate from './components/partner/partnerDetailsAPICreate';

import { LayoutDashboard, Volleyball } from "lucide-react";
import SupportQuery from "./components/partner/supportquery";
import FaqPage from "./components/partner/faqpage";

function App() {
  return (
    <BrowserRouter>
      <div className="App flex h-screen">
        <Sidebar>
          <Link to="/dashboard">
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
            />
          </Link>
          <Link to="/experience">
            <SidebarItem icon={<Volleyball size={20} />} text="Experience" />
          </Link>
        </Sidebar>

        <div className="flex-1 overflow-auto p-6 bg-gray-100">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<div>Welcome to Dashboard</div>} />
            <Route path="/experience/add" element={<AddExperience />} />
            <Route path="/dashboard" element={<div></div>} /> {/* Example route */}
            <Route path="/experience" element={<ViewExperience />} />
            <Route path="/partner/details_registration" element={<PartnerRegistrationNonAPI />} />
            <Route path="/partner/existing_system_registration" element={<PartnerAPIDetailsFormCreate />} />
          </Routes>
        </div>

        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;

