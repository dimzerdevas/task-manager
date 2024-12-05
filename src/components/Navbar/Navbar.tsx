import { User } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { HighlightedText, LoggedMessage, NavbarContainer, NavLeftSide, NavRightSide, ProfilePicture, WelcomeMessage } from "./styles";

interface NavbarProps {
    user: User | undefined;
    logout: () => void;
}

export const Navbar = ({ user, logout }: NavbarProps) => {
    const { name, picture, email } = user || {}
    return (
        <NavbarContainer>
            <NavLeftSide>
                <WelcomeMessage>
                    Welcome, {name}!
                </WelcomeMessage>
                <ProfilePicture
                    src={picture}
                    alt={name}
                />
            </NavLeftSide>
            <NavRightSide>
                <LoggedMessage>
                    logged in with <HighlightedText>{email}</HighlightedText>
                </LoggedMessage>
                <Button variant="contained" color="primary" onClick={() => logout()}>
                    Log Out
                </Button>
            </NavRightSide>
        </NavbarContainer>
    );
}

