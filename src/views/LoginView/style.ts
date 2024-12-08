import { Button, Card, CardContent } from '@mui/material';
import styled from 'styled-components';

export const WelcomeMessage = styled.h2`
  text-align: center;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 60%;
  }
`;

export const SubtitleMessage = styled.p`
  font-style: italic;
`;

export const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  align-items: center;
  justify content: center;
`;
export const StyledButton = styled(Button)`
  width: 200px;
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
