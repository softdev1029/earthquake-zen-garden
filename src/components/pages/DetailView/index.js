import React from "react";
import { useParams } from "react-router-dom";

import data from "mock/data.json";
import { formatDate } from "utils/time";

import * as S from "./style";

function DetailView() {
  let { id } = useParams();
  const item = data.data.features.find((e) => e.id === id);
  return (
    <S.Wrapper>
      <h2>{item.properties.place}</h2>
      <S.Body>
        <tbody>
          <S.Row>
            <S.Label>Title</S.Label>
            <S.Value>{item.properties.place}</S.Value>
          </S.Row>
          <S.Row>
            <S.Label>Magnitude</S.Label>
            <S.Value>{item.properties.mag}</S.Value>
          </S.Row>
          <S.Row>
            <S.Label>Time</S.Label>
            <S.Value>{formatDate(item.properties.time)}</S.Value>
          </S.Row>
          <S.Row>
            <S.Label>Status</S.Label>
            <S.Value>{item.properties.status}</S.Value>
          </S.Row>
          <S.Row>
            <S.Label>Tsunami</S.Label>
            <S.Value>{item.properties.tsunami}</S.Value>
          </S.Row>
          <S.Row>
            <S.Label>Type</S.Label>
            <S.Value>{item.properties.type}</S.Value>
          </S.Row>
        </tbody>
      </S.Body>
    </S.Wrapper>
  );
}

export default DetailView;
