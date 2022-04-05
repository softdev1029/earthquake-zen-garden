import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "components/template/Layout";
import Home from "components/pages/Home";
import DetailView from "components/pages/DetailView";
import ProfileView from "components/pages/ProfileView";
import NoPage from "components/pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detail/:id" element={<DetailView />} />
          <Route path="profile" element={<ProfileView />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
