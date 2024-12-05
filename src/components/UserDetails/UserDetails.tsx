import { User } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { HighlightedText, LoggedMessage, UserDetailsContainer, LeftSide, RightSide, ProfilePicture, WelcomeMessage } from "./styles";

interface UserDetailsProps {
    user: User | undefined;
    logout: () => void;
}

export const UserDetails = ({ user, logout }: UserDetailsProps) => {
    const { name, picture, email } = user || {};
    return (
        <UserDetailsContainer>
            <LeftSide>
                <WelcomeMessage>
                    Welcome, {name}!
                </WelcomeMessage>
                <ProfilePicture
                    src={picture}
                    alt={name}
                />
            </LeftSide>
            <RightSide>
                <LoggedMessage>
                    logged in with <HighlightedText>{email}</HighlightedText>
                </LoggedMessage>
                <Button variant="contained" color="primary" onClick={() => logout()}>
                    Log Out
                </Button>
            </RightSide>
        </UserDetailsContainer>
    );
}

