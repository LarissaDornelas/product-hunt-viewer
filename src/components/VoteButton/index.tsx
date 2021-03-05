import React from "react";

import { Container, Button } from "./styles";
import { IVoteButton } from "./types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

const VoteButton: React.FC<IVoteButton> = (props) => {
  const { votes } = props;

  return (
    <Container>
      <Button>
        <FontAwesomeIcon className="icon" icon={faSortUp} size="2x" />
        <span>{votes}</span>
      </Button>
    </Container>
  );
};

export { VoteButton };
