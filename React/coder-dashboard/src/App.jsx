import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing necessary Router components
import SignIn from "./pages/SignIn"; 
import SignUp from "./pages/SignUp"; 
import ProtectedRoute from "./routes/ProtectedRoute"; // Component to protect routes (only accessible by logged-in users)
import Home from "./pages/Home"; 
import Dashboard from "./pages/Dashboard"; 
import Navbar from "./components/Navbar"; 

// Main App Component
export default function App() {
  return (
    <Router>
      <Navbar /> {/* The Navbar is included globally */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page Route */}
        <Route path="/signin" element={<SignIn />} /> {/* Sign-In Page Route */}
        <Route path="/signup" element={<SignUp />} /> {/* Sign-Up Page Route */}
        
        {/* Protected Route for Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard /> {/* Only accessible if the user is authenticated */}
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
