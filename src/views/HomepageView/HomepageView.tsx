import { useAuth0 } from "@auth0/auth0-react";
import { Button, Card, CardContent, Typography } from "@mui/material";

export const HomepageView = (): JSX.Element => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Card>
            <CardContent>
                <h2>Welcome to my Task Manager App!</h2>
                <Button
                    onClick={() => loginWithRedirect()}
                    variant="contained"
                    color="primary"
                >
                    Login with SSO
                </Button>
                <Typography variant="subtitle2" display="block" align="center">
                    Please login via SSO to continue
                </Typography>
            </CardContent>
        </Card>
    );
}