import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { SidebarItem } from './components/sideNavBar';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/sideNavBar';
import AddExperience from './components/experience/addExperience';
import ViewExperience from './components/experience';
import PartnerNonAPIDetailsFormCreate from './components/partner/partnerDetailsNonAPICreate';

import {
  LayoutDashboard,
  Volleyball
} from 'lucide-react';

function App() {
  return (
    <BrowserRouter basename={'app'}>
      <div className="App flex h-screen">
        <Sidebar>
          <Link to="/dashboard">
            <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" />
          </Link>
          <Link to="/experience">
            <SidebarItem icon={<Volleyball size={20} />} text="Experience" />
          </Link>
        </Sidebar>

        {/* Main content area next to Sidebar */}
        <div className="flex-1 overflow-auto p-6 bg-gray-100">
          <Routes>
            <Route path="/experience/add" element={<AddExperience />} />
            <Route path="/dashboard" element={<div></div>} /> {/* Example route */}
            <Route path="/experience" element={<ViewExperience />} />
            <Route path="/partner/create" element={<PartnerNonAPIDetailsFormCreate />} />
          </Routes>
        </div>

        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
