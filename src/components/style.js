import styled from "styled-components";

import { Link as BaseLink } from "react-router-dom";

export const Link = styled(BaseLink)`
  color: var(--blue);

  &:visited {
    color: var(--purple);
  }
`;
