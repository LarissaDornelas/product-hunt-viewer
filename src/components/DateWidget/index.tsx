import React from "react";
import { format } from "date-fns";

import { Container } from "./styles";

const DateWidget: React.FC = () => {
  return (
    <Container data-testid="date-widget-container">
      <p>{format(new Date(), "'Today', Lo LLL ")}</p>
    </Container>
  );
};

export { DateWidget };
