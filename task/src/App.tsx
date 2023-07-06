import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { MultiStep } from "./components/MultiStep/MultiStep";
import { ForgotPass } from "./components/ForgotPass/ForgotPass";
import { Login } from "./components/Login/Login";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#171618";
  }, []);
  return (
    <div className="w-full h-full flex justify-center lg:items-center">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/multi-step" element={<MultiStep />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
