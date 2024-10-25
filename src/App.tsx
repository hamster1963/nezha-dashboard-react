// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import PrivateRoute from './components/PrivateRoute';
import { cn } from './lib/utils';
import Service from './pages/Service';
import Server from './pages/Server';
import Setting from './pages/Setting';
import Task from './pages/Task';
import User from './pages/User';
import Alarm from './pages/Alarm';
import Intranet from './pages/Intranet';



const App: React.FC = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className={cn(
        "min-h-screen font-sans antialiased flex w-full flex-col",
      )}>

        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 bg-muted/50 flex-col gap-4">
          <Header />
          <Routes>
            <Route path="/" element={<Server />} />
            <Route path="/service" element={<Service />} />
            <Route path="/task" element={<Task />} />
            <Route path="/alarm" element={<Alarm />} />
            <Route path="/intranet" element={<Intranet />} />
            <Route path="/setting" element={<Setting />} />

            <Route path="/user" element={<User />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                  <>fine</>
                </PrivateRoute>
              }
            /> */}
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
