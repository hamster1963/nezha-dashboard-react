import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  name: string;
  token: string;
  expire: string;
}

interface LoginForm {
  username: string;
  password: string;
}

interface LoginResponse {
  data: {
    expire: string;
    token: string;
  };
  error: string;
  success: boolean;
}

interface AuthContextType {
  user: User | null;
  signin: (
    userData: LoginForm,
  ) => Promise<{ success: boolean; error?: string }>;
  signout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expire = localStorage.getItem("expire");
    const username = localStorage.getItem("username");

    console.log(token, expire);

    if (token && username && expire && new Date(expire) > new Date()) {
      console.info("登录成功");
      setUser({ token, name: username, expire });
    } else {
      console.info("登录失败");
      setUser(null);
    }
  }, []);

  const signin = async (
    userData: LoginForm,
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch("http://127.0.0.1:8008/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userData.username,
          password: userData.password,
        }),
      });

      const data: LoginResponse = await response.json();

      console.log(data);

      if (data.success) {
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("username", userData.username);
        localStorage.setItem("expire", data.data.expire);

        setUser({
          token: data.data.token,
          name: userData.username,
          expire: data.data.expire,
        });

        return { success: true };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      console.error("登录错误:", error);
      return { success: false, error: "发生错误" };
    }
  };

  const signout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expire");
    localStorage.removeItem("username");
    setUser(null);
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
    throw new Error("useAuth 必须在 AuthProvider 内使用");
  }
  return context;
};
