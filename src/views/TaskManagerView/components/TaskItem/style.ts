import { ListItem, TextField } from '@mui/material';
import styled from 'styled-components';

export const StyledListItem = styled(ListItem)`
  margin-bottom: 10px;
  box-shadow: 1px 2px 3px 0px grey;
  gap: 10px;
  word-break: break-all;
  justify-content: space-between !important;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    gap: 10px;
  }

  & button {
    word-break: normal;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
`;

export const TaskDisplayed = styled.div`
  display: flex;
  width: 40%;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    flex-direction: column;
    width: 8%;
  }
`;

export const Actions = styled.div`
  display: flex;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    flex-direction: column;
  }
`;

export const StyledListItemButton = styled.div`
  width: 20%;
`;
