import { FormControl } from '@mui/material';
import styled from 'styled-components';

export const FilterFormContainer = styled(FormControl)`
  width: 50%;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100%;
  }
`;
