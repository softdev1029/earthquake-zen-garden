import React from "react";

import data from "mock/data.json";

import * as S from "./style";

function ProfileView() {
  const { profile } = data;
  return (
    <S.Wrapper>
      <h2>Profile</h2>
      <S.Body>
        <img src={profile.avatarImage} width={150} height={150} />
        <S.Table>
          <tbody>
            <tr>
              <S.Label>First name</S.Label>
              <S.Value>{profile.firstName}</S.Value>
            </tr>
            <tr>
              <S.Label>Last name</S.Label>
              <S.Value>{profile.lastName}</S.Value>
            </tr>
            <tr>
              <S.Label>Phone</S.Label>
              <S.Value>{profile.phone}</S.Value>
            </tr>
            <tr>
              <S.Label>Email</S.Label>
              <S.Value>{profile.email}</S.Value>
            </tr>
            <tr>
              <S.Label>Bio</S.Label>
              <S.Value>{profile.bio}</S.Value>
            </tr>
          </tbody>
        </S.Table>
      </S.Body>
    </S.Wrapper>
  );
}

export default ProfileView;
