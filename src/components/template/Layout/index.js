import React from "react";
import { Outlet, Link } from "react-router-dom";

import data from "mock/data.json";

import * as S from "./style";
import * as G from "components/style.js";

const Layout = () => {
  return (
    <>
      <S.Header>
        <Link to="/">
          <img src={data.site.logoImage} width={60} />
        </Link>
        <S.Title>Earthquake Zen Garden</S.Title>
        <G.Link to="/profile">Profile</G.Link>
      </S.Header>

      <Outlet />
    </>
  );
};

export default Layout;
