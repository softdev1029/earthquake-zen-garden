import React from "react";

import data from "mock/data.json";

import * as S from "./style";

function Home() {
  const list = data.data.features.map((e) => {
    return (
      <tr key={e.id}>
        <td>{e.properties.place}</td>
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
            <td>Title</td>
            <td>Magnitude</td>
            <td>Time</td>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </S.Wrapper>
  );
}

export default Home;
