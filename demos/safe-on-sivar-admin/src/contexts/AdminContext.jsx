import React, { useState, useEffect, useMemo, useCallback } from "react";
import adminService from '../services/Admin/Admin.services';

const AdminContext = React.createContext();
const TOKEN_KEY = "token";
const USERNAME_KEY = "email";

export const AdminProvider = (props) => {
    const [token, setToken] = useState(undefined);
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const verifyTokenAsync = async () => {
            const lsToken = getToken();

            if (lsToken) {
                const { email, role } = await adminService.verifyToken(lsToken);
                if (email && role) {
                    setUser({ email, role });
                    setTokenAll(lsToken);
                    localStorage.setItem(USERNAME_KEY, email);
                }
            }
        }

        verifyTokenAsync();
    }, [token])

    const setTokenAll = (token) => {
        localStorage.setItem(TOKEN_KEY, token);
        setToken(token);
    }

    const login = useCallback((email, password) => {
        const loginAsync = async () => {
            let status = false;
            try {
                const { token: tokenRes } = await adminService.login(email, password);
                if (tokenRes) {
                    setTokenAll(tokenRes);
                    status = true;
                }
            } catch (error) {
                console.error(error);
                console.error("Error in login");
            } finally {
                return status;
            }
        };

        return loginAsync();
    }, [])

    const logout = useCallback(() => {
        setUser(undefined);
        setTokenAll(undefined);
    }, [])

    const value = useMemo(() => ({
        token: token,
        user: user,
        login: login,
        logout: logout
    }), [token, user, login, logout]);

    return <AdminContext.Provider value={value} {...props} />;
}

export const useAdminContext = () => {
    const context = React.useContext(AdminContext);

    if (!context) {
        throw new Error("useAdminContext() must be inside of UserProvider");
    }

    return context;
}

const getToken = () => localStorage.getItem(TOKEN_KEY);