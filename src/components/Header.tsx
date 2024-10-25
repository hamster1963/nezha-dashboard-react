// src/components/Header.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ModeToggle } from "./ModeToggle";
import { DateTime } from "luxon";
import { navRouter } from "@/lib/nav-router";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import appleTouchIcon from "@/assets/apple-touch-icon.png";

const Header: React.FC = () => {
  return (
    <header className="w-full dark:bg-black/40 bg-muted border-b-[1px]">
      <div className="max-w-5xl mx-auto pt-8 px-4 lg:px-0 flex flex-col gap-4">
        <section className="flex items-center justify-between">
          <section className="flex items-center text-base font-medium">
            <div className="mr-1 flex flex-row items-center justify-start">
              <img
                width={40}
                height={40}
                alt="apple-touch-icon"
                src={appleTouchIcon}
                className="relative !m-0 border-2 border-transparent h-6 w-6 object-cover object-top !p-0"
              />
            </div>
            Nezha-Dashboard
          </section>
          <section className="flex items-center gap-2">
            <ModeToggle />
          </section>
        </section>
        <Overview />
        <TabNav />
      </div>
    </header>
  );
};

// https://github.com/streamich/react-use/blob/master/src/useInterval.ts
const useInterval = (callback: () => void, delay?: number | null) => {
  const savedCallback = useRef<() => void>(() => {});
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [delay]);
};

function Overview() {
  const { user, signout } = useAuth();
  const timeOption = DateTime.TIME_SIMPLE;
  timeOption.hour12 = true;
  const [timeString, setTimeString] = useState(
    DateTime.now().setLocale("en-US").toLocaleString(timeOption),
  );
  useInterval(() => {
    setTimeString(DateTime.now().setLocale("en-US").toLocaleString(timeOption));
  }, 1000);
  return (
    <section className={"flex flex-col"}>
      {user && (
        <div className="flex items-center gap-1.5">
          <p className="text-sm font-semibold">👋 晚上好, {user?.name}</p>
          <p
            className="text-xs font-semibold underline cursor-pointer"
            onClick={signout}
          >
            注销
          </p>
        </div>
      )}
      {!user && <p className="text-sm font-semibold">请先登录</p>}
      <div className="flex items-center gap-1.5">
        <p className="text-[13px] font-medium opacity-50">当前时间</p>
        <p className="opacity-1 text-[13px] font-medium">{timeString}</p>
      </div>
    </section>
  );
}

function TabNav() {
  const tabs = navRouter;
  const location = useLocation();
  const [path, setPath] = useState("");

  const nowPath = location.pathname;
  useEffect(() => {
    setPath(nowPath);
  }, [nowPath]);

  return (
    <div className="z-50 flex flex-col items-start w-full overflow-x-scroll scrollbar-hidden">
      <div className="flex items-center gap-1">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            to={tab.path}
            className={cn(
              "relative cursor-pointer rounded-3xl px-2.5 py-[8px] text-sm font-[600] transition-all duration-500",
              path === tab.path
                ? "text-black dark:text-white"
                : "text-stone-400 dark:text-stone-500",
            )}
          >
            <div className="relative z-20 flex items-center gap-1">
              <p className="whitespace-nowrap">{tab.name}</p>
            </div>
            {path === tab.path && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-black dark:bg-white"
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
