import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useLocalStorage("authState", {
    isAuth: false,
    user: null,
    token: null,
  });

  const handleLogin = (user, token) => {
    setAuthState({ isAuth: true, user: user, token: token });
  };

  const handleLogout = () => {
    setAuthState({
      isAuth: false,
      user: null,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
