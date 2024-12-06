import { CircularProgress } from "@mui/material";
import { LoaderContainer, LoadingMessage } from "./styles";

export const Loader = () => {
  return (
    <LoaderContainer>
      <CircularProgress />
      <LoadingMessage>Loading...</LoadingMessage>
    </LoaderContainer>
  );
};
