import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Container } from "./styles";
import { theme } from "styles/theme";

const SearchButton: React.FC = () => {
  return (
    <Container>
      <FontAwesomeIcon
        icon={faSearch}
        color={theme.colors.fontPrimary}
        size="lg"
      />
    </Container>
  );
};

export { SearchButton };
