import React, { useState } from "react";

import data from "mock/data.json";

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
        <td>{e.properties.mag}</td>
        <td>{e.properties.time}</td>
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
            <td onClick={() => handleSort("title")}>Title</td>
            <td onClick={() => handleSort("mag")}>Magnitude</td>
            <td onClick={() => handleSort("time")}> Time</td>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </S.Wrapper>
  );
}

export default Home;
