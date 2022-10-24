import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../components/form/Form";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
