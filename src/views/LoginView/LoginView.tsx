import { useAuth0 } from '@auth0/auth0-react';
import {
  StyledButton,
  StyledCard,
  StyledCardContent,
  SubtitleMessage,
  WelcomeMessage,
} from './style';

export const LoginView = (): JSX.Element => {
  const { loginWithRedirect } = useAuth0();

  return (
    <StyledCard>
      <StyledCardContent>
        <WelcomeMessage>Welcome to the Task Manager App!</WelcomeMessage>
        <StyledButton
          onClick={() => loginWithRedirect()}
          variant="contained"
          color="primary"
        >
          Login with SSO
        </StyledButton>
        <SubtitleMessage>You need to login to continue</SubtitleMessage>
      </StyledCardContent>
    </StyledCard>
  );
};
