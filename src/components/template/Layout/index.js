import React from "react";
import { Outlet, Link } from "react-router-dom";

import data from "mock/data.json";

import * as S from "./style";

const Layout = () => {
  return (
    <>
      <S.Header>
        <img src={data.site.logoImage} width={60} />
        <S.Title>Earthquake Zen Garden</S.Title>
        <Link to="/profile">Profile</Link>
      </S.Header>

      <Outlet />
    </>
  );
};

export default Layout;
