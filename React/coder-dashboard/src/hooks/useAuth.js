import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/authSlice";

export const useAuth = () => {
  const { isAuthenticated, user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const signIn = (userData) => dispatch(login(userData));
  const signOut = () => dispatch(logout());

  return {
    isAuthenticated,
    user,
    token,
    signIn,
    signOut,
  };
};