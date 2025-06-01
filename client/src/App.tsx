import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import ProtectedRoute from './components/protectedRoute';
import Dashboard from './pages/Dashboard';
import ShopDashboard from './pages/ShopDashboard';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/:shopName" element={<ProtectedRoute element={<ShopDashboard />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;