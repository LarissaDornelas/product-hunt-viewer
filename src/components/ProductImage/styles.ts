import styled from "styled-components";

import { ImageSize } from "./types";

export const Container = styled.div<{ imageUrl: string; size: ImageSize }>`
  background-image: url(${({ imageUrl }) => (imageUrl ? imageUrl : "")});
  background-repeat: no-repeat;
  background-size: cover;
  height: ${({ size }) => (size ? size : "40px")};
  width: ${({ size }) => (size ? size : "40px")};
  border-radius: 10px;
`;
