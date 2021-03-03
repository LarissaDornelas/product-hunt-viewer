import React from "react";
import { Search } from "@material-ui/icons";

import { Container } from "./styles";

const SearchButton: React.FC = () => {
  return (
    <Container>
      <Search fontSize="large" color="disabled" />
    </Container>
  );
};

export { SearchButton };
