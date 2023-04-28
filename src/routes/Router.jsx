import Home from "@/pages/Home";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
