import { CircularProgress } from '@mui/material';
import { LoaderContainer, LoadingMessage } from './style';

export const Loader = () => {
  return (
    <LoaderContainer>
      <CircularProgress />
      <LoadingMessage>Loading...</LoadingMessage>
    </LoaderContainer>
  );
};
