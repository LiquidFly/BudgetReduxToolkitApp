import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./Pages/LoginForm";
import SignUpForm from "./Pages/SignUpForm";
import Homepage from "./Pages/Homepage";
import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "../src/Context/Context";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <>
      <AppContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/SignUpForm" element={<SignUpForm />} />
            <Route path="/MainPage" element={<MainPage />} />
          </Routes>
          <Toaster position="top-center" />
        </Router>
      </AppContextProvider>
    </>
  );
}

export default App;
