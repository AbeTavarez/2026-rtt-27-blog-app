import { useState, type ReactNode } from "react";
import { AuthContext } from "../context/AuthContext";

interface AuthProviderProps {
    children: ReactNode
}


function AuthProvider({children}: AuthProviderProps) {
    const [user, setUser] = useState({id: "101", username: "SoloDev101"});
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;