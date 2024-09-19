import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from './Components/Menu/Menu';
import AdminProtectedRoute from './utils/AdminProtectedRoutes';

//public route imports
import Home from './Pages/Home/Home';
import RequestNew from './Pages/RequestNew/RequestNew';
import Login from './Pages/Login/Login';
import RecentlyAdded from './Pages/RecentlyAdded/RecentlyAdded';

//protected route imports
import AdminReview from './Pages/Admin/AdminReview/AdminReview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <div className="pages">
          <Routes>
            {/* Public Routes */}
            <Route path='/' element={<Home />} />
            <Route path='/requestNew' element={<RequestNew />} />
            <Route path='/login' element={<Login />} />
            <Route path='/recentlyAdded' element={<RecentlyAdded />} />

            {/* Protected routes */}
            <Route path='admin' element={
              // <AdminProtectedRoute>
                <AdminReview  />
              // </AdminProtectedRoute>
            } />

            <Route path='*' element={<h1>Page not found.</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
