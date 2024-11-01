import logo from './logo.svg';
import './App.css';
import AddExperience from './components/experience/addExperience';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'app'}>
      <Routes>
        <Route path="/experience/add" element={<AddExperience />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
