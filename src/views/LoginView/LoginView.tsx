import { useAuth0 } from '@auth0/auth0-react';
import { Button, Card, CardContent } from '@mui/material';
import { SubtitleMessage, WelcomeMessage } from './style';

export const LoginView = (): JSX.Element => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Card>
      <CardContent>
        <WelcomeMessage>Welcome to the Task Manager App!</WelcomeMessage>
        <SubtitleMessage>You need to login to continue</SubtitleMessage>
        <Button
          onClick={() => loginWithRedirect()}
          variant="contained"
          color="primary"
        >
          Login with SSO
        </Button>
      </CardContent>
    </Card>
  );
};
