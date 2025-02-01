import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Correct import
import './App.css';
import MainLayout from './Layouts/MainLayout';
import Dashboard from './Pages/Dashboard';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* MainLayout is the wrapper that contains other routes */}
          <Route path="/" element={<MainLayout />}>
            {/* HomePage will be rendered by default when accessing "/" */}
            <Route index element={<HomePage />} /> 
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
