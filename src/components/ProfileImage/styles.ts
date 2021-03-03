import styled from "styled-components";

import noProfileImage from "assets/images/no-profile-image.png";

const Container = styled.div<{ imageUrl?: string }>`
  background-image: ${({ imageUrl }) =>
    imageUrl ? `url(${imageUrl})` : `url(${noProfileImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

export { Container };
