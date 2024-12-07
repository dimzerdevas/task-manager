import { IconButton } from '@mui/material';
import styled from 'styled-components';

export const AddTaskContainer = styled.div`
  display: flex;
  align-items: baseline;
  @media only screen 
      and (min-device-width: 320px) 
      and (max-device-width: 480px)
      and (-webkit-min-device-pixel-ratio: 2) {
        margin-top: 20px;
    }
`;

export const StyledIconButton = styled(IconButton)`
  align-self: center;
`;
