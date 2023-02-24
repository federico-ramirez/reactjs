import React, { useState, useEffect, useMemo, useCallback } from "react";

const AdminContext = React.createContext();
const USERNAME_KEY = "email";

export const AdminProvider = (props) => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const { email, role } = [];
        if (email && role) {
            setUser({ email, role });
            localStorage.setItem(USERNAME_KEY, email);
        }
    }, [])

    const login = useCallback((email, password) => {
        const loginAsync = async () => {
            let status = false;
            
            try {
                //const { token: tokenRes } = await adminService.login(email, password);
                status = (email !== '' && password !== '') ? true : false;
                /*if (tokenRes) {
                    setTokenAll(tokenRes);
                    status = true;
                }*/
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
    }, [])

    const value = useMemo(() => ({
        user: user,
        login: login,
        logout: logout
    }), [user, login, logout]);

    return <AdminContext.Provider value={value} {...props} />;
}

export const useAdminContext = () => {
    const context = React.useContext(AdminContext);

    if (!context) {
        throw new Error("useAdminContext() must be inside of UserProvider");
    }

    return context;
}