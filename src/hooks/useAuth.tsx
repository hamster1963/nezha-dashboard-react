import React, { createContext, useContext, useState } from 'react';

interface User {
    name: string
    token: string
    expire: string
}

interface LoginForm {
    username: string
    password: string
}


interface AuthContextType {
    user: User | null;
    signin: (userData: LoginForm) => void;
    signout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState(null);

    const signin = (userData: LoginForm) => {
        // setUser(userData);
        console.log(userData);
        // 可以在此添加持久化逻辑，如 localStorage
    };

    const signout = () => {
        setUser(null);
        // 清除持久化数据
    };

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth 必须在 AuthProvider 内使用');
    }
    return context;
};
