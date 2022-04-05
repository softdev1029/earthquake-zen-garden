import styled from "styled-components";
import { Link as BaseLink } from "react-router-dom";
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--ligh-gray);
  padding: 20px;
`;

export const Logo = styled.img``;

export const Title = styled.h1``;

export const Link = styled(BaseLink)`
  color: var(--purple);
`;
