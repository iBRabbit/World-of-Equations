import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

import AppNavbar from "./layouts/Navbar";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Profile from "./pages/user/Profile";
import ProtectedRoute from "./components/routes/ProtectedRoute";

import { AuthProvider } from "./helpers/AuthContext";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element = {<Dashboard />} />
          <Route path="/signup" element = {<Register />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/profile" element = {<ProtectedRoute element={<Profile />} />} />
        </Routes>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
