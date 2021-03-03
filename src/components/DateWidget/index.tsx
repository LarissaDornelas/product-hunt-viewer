import React from "react";
import { format } from "date-fns";

import { Container } from "./styles";

const DateWidget: React.FC = () => {
  return (
    <Container>
      <p>{format(new Date(), "'Today', Lo LLL ")}</p>
    </Container>
  );
};

export { DateWidget };
