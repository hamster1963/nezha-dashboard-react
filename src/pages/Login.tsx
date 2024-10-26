import React, { useEffect, useState, useCallback } from "react";
import { Loader } from "@/components/loading/Loader";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const { user, signin } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // 获取用户来源页面路径，如果没有则跳转到首页 "/"
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    console.log("Auth state:", { user });
  }, [user]);

  const handleLogin = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null); // 重置错误
      setLoading(true);

      try {
        const result = await signin({ username, password });

        if (!result.success) {
          setError(result.error || "登录失败");
        } else {
          navigate(from, { replace: true });
        }
      } catch (err) {
        console.error("Login error:", err);
        setError("登录过程中发生错误");
      } finally {
        setLoading(false);
      }
    },
    [username, password, signin, from, navigate], // 确保这些依赖项变化时，函数才会重新创建
  );

  // 如果用户已登录，直接跳转
  if (user) {
    return <Navigate to={from} replace />;
  }

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col items-center justify-start gap-4 p-4"
    >
      <section className="flex flex-col items-start gap-2">
        {error && (
          <p className="text-red-500 text-sm font-semibold">
            登录失败: {error}
          </p>
        )}
        <p className="text-base font-semibold">请先登录</p>
        <input
          className="px-1 border-[1px] bg-stone-100 dark:bg-stone-800 rounded-[5px] placeholder:text-sm placeholder:text-muted-foreground"
          name="username"
          type="text"
          placeholder="用户名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="px-1 border-[1px] bg-stone-100 dark:bg-stone-800 rounded-[5px] placeholder:text-sm placeholder:text-muted-foreground"
          name="password"
          type="password"
          placeholder="密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="px-1.5 py-0.5 w-fit flex items-center gap-1 text-sm font-semibold rounded-[8px] border bg-card hover:brightness-95 transition-all text-card-foreground shadow-lg shadow-neutral-200/40 dark:shadow-none"
          disabled={loading}
        >
          登录
          {loading && <Loader visible={true} />}
        </button>
      </section>
    </form>
  );
}
