import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./components/Profile";
import Workspace from "./components/Workspace";
import ProtectedRoute from "./routes/ProtectedRoute";
import Challenges from "./pages/Challenges";
import ChallengesList from "./components/ChallengesList";

export default function App() {
  const isLoggedIn = useSelector((state) => !!state.auth.user);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public or Authenticated Home based on login status */}
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Landing />} />

        {/* Auth */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Challenge List page */}
        <Route
          path="/challenges-list"
          element={
            <ProtectedRoute>
              <ChallengesList />
            </ProtectedRoute>
          }
        />

        {/* Challenges page - list of challenges, click challenge to workspace */}
        <Route
          path="/challenges"
          element={
            <ProtectedRoute>
              <Challenges />
            </ProtectedRoute>
          }
        />

        {/* Leaderboard */}
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Workspace default redirect */}
        <Route path="/workspace" element={<Navigate to="/workspace/1" replace />} />

        {/* Workspace for a specific challenge */}
        <Route
          path="/challenges/:challengeId"
          element={
            <ProtectedRoute>
              <Workspace />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
