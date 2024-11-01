import logo from './logo.svg';
import './App.css';
import AddExperience from './components/experience/addExperience';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'app'}>
        <Routes>
          <Route path="/experience/add" element={<AddExperience />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
}

export default App;
