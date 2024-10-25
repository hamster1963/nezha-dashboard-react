// src/components/Profile.tsx
import React from "react";
import { useAuth } from "../hooks/useAuth";

const Profile: React.FC = () => {
  const { user, signin, signout } = useAuth();

  return (
    <div>
      {user ? (
        <div className="flex items-center space-x-2">
          <span>欢迎，{user.name}</span>
          <button
            onClick={signout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            登出
          </button>
        </div>
      ) : (
        <button
          onClick={() => signin({ username: "admin", password: "admin" })}
          className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
        >
          登录
        </button>
      )}
    </div>
  );
};

export default Profile;
