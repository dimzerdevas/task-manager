import { User } from '@auth0/auth0-react';
import { IconButton } from '@mui/material';
import {
  HighlightedText,
  LoggedMessage,
  UserDetailsContainer,
  LeftSide,
  RightSide,
  ProfilePicture,
  WelcomeMessage,
  StyledButton,
} from './style';
import { ModeNight, LightMode } from '@mui/icons-material';
import { useThemeContext } from '../../context/ThemeContext';

interface UserDetailsProps {
  user: User | undefined;
  logout: () => void;
}

export const UserDetails = ({ user, logout }: UserDetailsProps) => {
  const { name, picture, email } = user || {};
  const { toggleTheme, theme } = useThemeContext();

  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <UserDetailsContainer>
      <LeftSide>
        <WelcomeMessage>Welcome, {name}!</WelcomeMessage>
        <ProfilePicture src={picture} alt={name} />
      </LeftSide>
      <RightSide>
        <LoggedMessage>
          logged in with <HighlightedText>{email}</HighlightedText>
        </LoggedMessage>
        <StyledButton variant="text" color="primary" onClick={() => logout()}>
          Log Out
        </StyledButton>
        <IconButton onClick={toggleTheme}>
          {isDarkMode ? <LightMode /> : <ModeNight />}
        </IconButton>
      </RightSide>
    </UserDetailsContainer>
  );
};
