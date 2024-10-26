// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { cn } from "./lib/utils";
import Service from "./pages/Service";
import Server from "./pages/Server";
import Setting from "./pages/Setting";
import Task from "./pages/Task";
import User from "./pages/User";
import Alarm from "./pages/Alarm";
import Intranet from "./pages/Intranet";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

const App: React.FC = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div
        className={cn(
          "min-h-screen font-sans antialiased flex w-full flex-col",
        )}
      >
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 bg-muted/50 flex-col gap-4">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Server />
                </PrivateRoute>
              }
            />
            <Route
              path="/service"
              element={
                <PrivateRoute>
                  <Service />
                </PrivateRoute>
              }
            />
            <Route
              path="/task"
              element={
                <PrivateRoute>
                  <Task />
                </PrivateRoute>
              }
            />
            <Route
              path="/alarm"
              element={
                <PrivateRoute>
                  <Alarm />
                </PrivateRoute>
              }
            />
            <Route
              path="/intranet"
              element={
                <PrivateRoute>
                  <Intranet />
                </PrivateRoute>
              }
            />
            <Route
              path="/setting"
              element={
                <PrivateRoute>
                  <Setting />
                </PrivateRoute>
              }
            />
            <Route
              path="/user"
              element={
                <PrivateRoute>
                  <User />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
