import React from "react";

import { Container } from "./styles";

const Card: React.FC = (props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export { Card };
