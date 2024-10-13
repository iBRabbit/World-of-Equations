import React, { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '../api/axiosConfig';

const AuthContext = createContext();

export const AuthProvider =  ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axiosInstance.get('/auth/check', {
                    headers: {
                        token: `${localStorage.getItem('token')}`,
                    },
                });
                
                if (response.status === 200) 
                    setIsAuthenticated(true);
                else 
                    setIsAuthenticated(false);
                
            } catch (error) {
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };
        
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ 
            isAuthenticated, 
            setIsAuthenticated,
            loading,
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
