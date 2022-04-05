import React, { useState } from "react";

import data from "mock/data.json";

import * as S from "./style";
import { Link } from "react-router-dom";

function Home() {
  const [sort, setSort] = useState();

  const sorted = data.data.features.sort((a, b) => {
    if (!sort) {
    } else if (sort === "title") {
      return a.properties.place === b.properties.place
        ? 0
        : a.properties.place > b.properties.place
        ? -1
        : 1;
    } else if (sort === "mag") {
      return a.properties.mag === b.properties.mag
        ? 0
        : a.properties.mag > b.properties.mag
        ? -1
        : 1;
    } else if (sort === "time") {
      return a.properties.time === b.properties.time
        ? 0
        : a.properties.time > b.properties.time
        ? -1
        : 1;
    }
  });
  const list = sorted.map((e) => {
    return (
      <tr key={e.id}>
        <td>
          <Link to={`/detail/${e.id}`}>{e.properties.place}</Link>
        </td>
        <td>{e.properties.mag}</td>
        <td>{e.properties.time}</td>
      </tr>
    );
  });
  return (
    <S.Wrapper>
      <h2>USGS All Earthquakes, Past Hour</h2>
      <table>
        <thead>
          <tr>
            <td onClick={() => setSort("title")}>Title</td>
            <td onClick={() => setSort("mag")}>Magnitude</td>
            <td onClick={() => setSort("time")}> Time</td>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </S.Wrapper>
  );
}

export default Home;
