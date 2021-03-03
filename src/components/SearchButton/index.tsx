import React from "react";
import { Search } from "@material-ui/icons";

import { Container } from "./styles";

const SearchButton = () => {
  return (
    <Container>
      <Search fontSize="large" color="disabled" />
    </Container>
  );
};

export { SearchButton };
