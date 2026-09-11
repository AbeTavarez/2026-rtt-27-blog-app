import { createContext } from "react";

interface User {
    id: string;
    username: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: true | false;
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    isAuthenticated: false,
    login: () => console.warn("Login function"),
    logout: () => console.warn("Logout function")
});