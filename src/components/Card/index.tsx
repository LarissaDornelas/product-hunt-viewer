import React from "react";

import { Container } from "./styles";

const Card: React.FC = (props) => {
  const { children } = props;
  return <Container data-testid="card-container">{children}</Container>;
};

export { Card };
