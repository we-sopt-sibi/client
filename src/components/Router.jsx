import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, NotFound, Page1 } from "../pages";
import { Footer, Header } from ".";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page1/*" element={<Page1 />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
