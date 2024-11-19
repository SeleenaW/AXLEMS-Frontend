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
import PartnerRegistrationNonAPI from "./components/partner/partnerDetailsNonAPICreate";
import Login from "./components/partner/login/Login";
import PartnerAPIDetailsFormCreate from "./components/partner/partnerDetailsAPICreate";
import PartnerAnalyticsInsights from "./components/partner/analytics";
import IntegrationManagement from "./components/partner/integrationManagement";
import Notifications from "./components/partner/notifications";

import PartnerDashboard from "./components/partner/dashboard";
import {
  LayoutDashboard,
  ChartColumn,
  Webhook,
  MailQuestion,
  BellRing,
} from "lucide-react";
import SupportQuery from "./components/partner/supportquery";
import FaqPage from "./components/partner/faqpage";

function App() {
  return (
    <BrowserRouter>
      <div className="App flex h-screen">
        <Sidebar>
          <Link to="/partner/dashboard">
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
            />
          </Link>
          <Link to="/partner/notifications">
            <SidebarItem icon={<BellRing size={20} />} text="Notifications" />
          </Link>
          <Link to="/partner/analytics">
            <SidebarItem icon={<ChartColumn size={20} />} text="Analytics" />
          </Link>
          <Link to="/partner/integration">
            <SidebarItem icon={<Webhook size={20} />} text="Integrations" />
          </Link>
          <Link to="/partner/support_query">
            <SidebarItem icon={<MailQuestion size={20} />} text="Support" />
          </Link>
        </Sidebar>

        <div className="flex-1 overflow-auto p-6 bg-gray-100">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/experience/add" element={<AddExperience />} />
            <Route path="/experience" element={<ViewExperience />} />
            <Route
              path="/partner/details_registration"
              element={<PartnerRegistrationNonAPI />}
            />
            <Route
              path="/partner/existing_system_registration"
              element={<PartnerAPIDetailsFormCreate />}
            />
            <Route path="/partner/support_query" element={<SupportQuery />} />
            <Route path="/partner/faq" element={<FaqPage />} />
            <Route path="/partner/dashboard" element={<PartnerDashboard />} />
            <Route
              path="/partner/analytics"
              element={<PartnerAnalyticsInsights />}
            />
            <Route
              path="/partner/integration"
              element={<IntegrationManagement />}
            />
            <Route path="/partner/notifications" element={<Notifications />} />
          </Routes>
        </div>

        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
