import React, { useState } from "react";

import data from "mock/data.json";
import { formatDate } from "utils/time";

import * as S from "./style";
import * as G from "components/style.js";

const sortFunc = (a, b, toggle) => {
  return a === b ? 0 : a > b ? (toggle ? 1 : -1) : toggle ? -1 : 1;
};

function Home() {
  const [sort, setSort] = useState("");
  const [toggle, setToggle] = useState(false);

  const sorted = data.data.features.sort((a, b) => {
    if (!sort) {
    } else if (sort === "title") {
      return sortFunc(a.properties.place, b.properties.place, toggle);
    } else if (sort === "mag") {
      return sortFunc(a.properties.mag, b.properties.mag, toggle);
    } else if (sort === "time") {
      return sortFunc(a.properties.time, b.properties.time, toggle);
    }
  });

  const list = sorted.map((e) => {
    return (
      <tr key={e.id}>
        <td>
          <G.Link to={`/detail/${e.id}`}>{e.properties.place}</G.Link>
        </td>
        <S.CenteredCell>{e.properties.mag}</S.CenteredCell>
        <td>{formatDate(e.properties.time)}</td>
      </tr>
    );
  });

  const handleSort = (newSort) => {
    if (sort === newSort) {
      setToggle(!toggle);
    }
    setSort(newSort);
  };

  return (
    <S.Wrapper>
      <h2>USGS All Earthquakes, Past Hour</h2>
      <table>
        <thead>
          <tr>
            <S.HeadCell onClick={() => handleSort("title")}>Title</S.HeadCell>
            <S.HeadCell onClick={() => handleSort("mag")}>Magnitude</S.HeadCell>
            <S.HeadCell onClick={() => handleSort("time")}> Time</S.HeadCell>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </S.Wrapper>
  );
}

export default Home;
