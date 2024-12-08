import { IconButton } from '@mui/material';
import styled from 'styled-components';

export const StyledIconButton = styled(IconButton)`
  align-self: center;
`;

export const AddTaskContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    margin: 0 auto;
  }
`;
