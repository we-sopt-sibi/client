import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Article, NotFound, ArticleList } from "../pages";
import { Footer, Header } from ".";

const Router = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <BrowserRouter>
      <Header showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      <Routes>
        <Route path="/" element={<Article setShowDrawer={setShowDrawer} />} />
        <Route path="/article/:id" element={<Article setShowDrawer={setShowDrawer} />} />
        <Route path="/list/*" element={<ArticleList setShowDrawer={setShowDrawer} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
