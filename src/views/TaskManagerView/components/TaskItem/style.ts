import { ListItem, TextField } from '@mui/material';
import styled from 'styled-components';

export const StyledListItem = styled(ListItem)`
  margin-bottom: 10px;
  box-shadow: 1px 2px 3px 0px grey;
  gap: 10px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    gap: 1px;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 40%;
`;

export const TaskDisplayed = styled.div`
  display: flex;
  width: 40%;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    flex-direction: column;
  }
`;

export const Actions = styled.div`
  display: flex;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    flex-direction: column;
    // align-items: center;
  }
`;
