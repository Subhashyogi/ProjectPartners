
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainProvider, useMainContext } from "./context/MainContext";
import "keen-slider/keen-slider.min.css";
import "./index.css"; // Your Tailwind setup
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import Home from "./component/Home";
import Login from "./client/pages/Login";
import NotFound from './component/NotFound';
import { useAuth } from "./client/context/AuthContext";






export default function App() {
  const { user } = useMainContext()
  // const {token} = useAuth();
  
  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <Helmet>
        <title>Project Partners - Digital Marketing & Web Development</title>
        <meta name="description" content="Project Partners offers cutting-edge digital marketing and web development solutions tailored for your business growth." />
        <meta property="og:title" content="Project Partners - Digital Marketing & Web Development" />
        <meta property="og:description" content="Empowering your brand with tailored marketing and web solutions." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://projectpartners.netlify.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Project Partners - Digital Marketing & Web Development" />
        <meta name="twitter:description" content="Empowering your brand with tailored marketing and web solutions." />
        <meta name="twitter:image" content="/og-image.png" />
      </Helmet>
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={user ? <div>Dashboard</div> : <Navigate to="/login" />} />
          <Route path="*" element={ <NotFound />} />
        </Routes>
      </Router>
  </>
   
  );
}
